import validatorMixin from './default';
import FormlidateData from './FormlidateData';
import CallbackValidator from './CallbackValidator';

// Note that all properties and methods should be prepended with a $
// to enable one differentiate core methods or properties from props
// that were merged into the class.

export default class Formlidate {
  /**
   * Create a new formlidate instance.
   *
   * @param {string} [selector]
   * @param {Object} [options]
   * @param {Object} options.placeholders
   * @param {Object|string} options.rules
   * @param {object} options.messages
   * @param {boolean} options.onBlur
   * @param {boolean} options.onInput
   * @param {string} options.fieldSelector
   * @param {string} options.feedbackSelector
   * @param {Function} options.beforeValidate
   * @param {Function} options.onInvalid
   * @param {Function|boolean} options.onChange
   * @param {Function} options.validated
   */
  constructor(selector = null, options = {}) {
    // we merge option props into the class
    const mergedOptions = { ...Formlidate.$validatorMixinOptions(), ...options };

    Object.keys(mergedOptions).forEach((key) => {
      this[key] = this[key] ?? mergedOptions[key];
    });

    this.$selector = selector ?? validatorMixin.selector;
    this.$form = this.$selector instanceof Element
      ? this.$selector
      : document.querySelector(this.$selector);

    if (!this.$form) {
      // @todo throw error
      return;
    }

    this.$attachPlaceholders();
    this.$setFields();
    this.$attachSubmitEvent();
  }

  /**
   * Attach form placeholders to the static $placeholders.
   */
  $attachPlaceholders() {
    if (this.placeholders) {
      Formlidate.$withPlaceholders(this.placeholders);
    }
  }

  /**
   * Assign rules and feedbackSelector to form fields.
   */
  $setFields() {
    const fields = {};

    // first we assign rules and field element to each field
    if (this.rules && typeof this.rules === 'object') {
      // we give precedence to rules property when setting fields
      Object.keys(this.rules).forEach((fieldName) => {
        const rules = this.rules[fieldName];
        const selector = this.fieldSelector.replace(':attribute', fieldName);

        const data = {
          attribute: fieldName,
          rules: typeof rules === 'string' ? rules.split('|') : rules,
          el: this.$form.querySelector(selector),
          els: this.$form.querySelectorAll(selector),
        };

        fields[fieldName] = data;
      });
    } else {
      // alternatively, we search through the html fields for rules.
      [...this.$form.querySelectorAll('[name]')].forEach((el) => {
        const name = el.getAttribute('name');
        // @todo through error if name is null or undefined

        const data = {
          attribute: name,
          rules: el.getAttribute('data-rules') ? el.getAttribute('data-rules').split('|') : [],
          el,
          els: this.$form.querySelectorAll(`[name=${name}]`),
        };

        fields[name] = data;
      });
    }

    Object.values(fields).forEach((field) => {
      // next we assign the feedback selector value
      // and query the feedback el to each field.
      field.feedbackSelector = this.feedbackSelector.replace(':attribute', field.attribute);
      field.feedbackEl = this.$form.querySelector(field.feedbackSelector);

      // we assign custom field rule messages to the field
      field.messages = this.messages?.[field.attribute] ?? null;

      // next we add a change event to all field elements
      if (typeof this.onChange === 'function') {
        [...field.els].forEach((el) => {
          el.addEventListener('change', (event) => {
            this.onChange.call(this, event, field);
          });
        });
      }
    });

    this.$fields = fields;
  }

  /**
   * Attach submit event listener to the form that requires validation.
   */
  $attachSubmitEvent() {
    this.$attachedSubmitEvent = this.$attachedSubmitEvent ?? false;

    // we check if the submit event hasn't been attached attached
    // to avoid attaching an event twice and also, the form exists.
    if (this.$attachedSubmitEvent || !this.$form) return;

    this.$form.addEventListener('submit', (event) => this.$handleValidation(event));

    this.$attachedSubmitEvent = true;
  }

  /**
   * Handle the form validation event.
   *
   * @param {Event} event
   */
  $handleValidation(event) {
    if (typeof this.beforeValidate === 'function') this.beforeValidate.call(this, event);

    const result = Formlidate.$validate(this.$fieldValues(), this.$fields);

    if (result.invalid) {
      return typeof this.onInvalid === 'function'
        ? this.onInvalid.call(this, event, result.errors)
        : this.onInvalid;
    }

    return typeof this.validated === 'function'
      ? this.validated.call(this, result.data)
      : this.validated;
  }

  /**
   * Get field values.
   */
  $fieldValues() {
    const formData = new FormlidateData(this.$form);

    const values = {};

    Object.values(this.$fields).forEach((field) => {
      const multipleValue = formData.getAll(field.attribute);
      const singleValue = formData.get(field.attribute);
      let value;

      switch (field.el.type) {
      case 'file':
        value = field.el.multiple ? multipleValue : singleValue;
        break;
      case 'select-multiple':
        value = multipleValue;
        break;
      case 'checkbox':
        value = multipleValue;
        break;
      default:
        value = singleValue;
        break;
      }

      values[field.attribute] = value;
    });

    return values;
  }

  /**
   * Get validator options value.
   */
  static $validatorMixinOptions() {
    const options = typeof validatorMixin.options === 'function'
      ? validatorMixin.options.call(validatorMixin)
      : validatorMixin.options;

    return options;
  }

  /**
   * Validate form fields against its rules.
   *
   * @param {{fieldName: any}} data
   * An object containing field names as key and field value as value.
   *
   * @param {{fieldName: {attribute: string, rules: array}}} fields
   * An object containing fields with the field name as key.
   * The value must contain the field object with atleast attribute and rules properties.
   */
  static $validate(data, fields) {
    const result = {
      invalid: false,
      errors: {},
      data,
    };

    Object.values(fields).forEach((field) => {
      let errorMessage;
      let validator;
      const value = data[field.attribute];
      const values = data;
      const { attribute } = field;

      field.rules.some((ruleName) => {
        if (typeof ruleName === 'function') {
          validator = new CallbackValidator(ruleName);
        } else {
          const Rule = Formlidate.$findRule(ruleName);

          if (!Rule) {
            // note that if the rule does not exist,
            // we still assign an error to the field.
            errorMessage = 'Invalid rule';

            return false;
          }

          const parameters = Formlidate.$ruleParameters(ruleName);
          validator = new Rule(parameters);
        }

        // we only want to run a validation rule if the field value is present
        // just like saying the field can be nullable but only validate
        // when it has a value.
        if (ruleName !== 'required') {
          // we know the value is empty if it fails the required rule.
          const RequiredRule = Formlidate.$findRule('required');
          const empty = !(new RequiredRule()).passes(value);
          if (empty) return false; // pass validation
        }

        if (validator.passes(value, values, attribute)) return false;

        // validation fails
        const validatorMessage = field.messages?.[String(ruleName)] ?? validator.message();
        let message = validatorMessage ?? 'Invalid';
        message = message.replace(':attribute', field.attribute);
        errorMessage = message;

        // we stop validating after first failure.
        return true;
      }, this);

      if (errorMessage) result.errors[field.attribute] = errorMessage;
    }, this);

    result.invalid = Object.keys(result.errors).length > 0;

    return result;
  }

  /**
   * Swap attribute placeholders with a more user friendly label
   * such as "First name" in place of "first_name".
   *
   * @param {Object} placeholders
   */
  static $withPlaceholders(placeholders) {
    if (!this.$placeholders) {
      this.$placeholders = placeholders;
    }

    this.$placeholders = { ...this.$placeholders, ...placeholders };
  }

  /**
   * Extract parameters from a given form rule.
   *
   * @param {string} ruleName
   */
  static $ruleParameters(ruleName) {
    const parameters = ruleName.split(':', 2)[1]?.split(',');

    return parameters ?? [];
  }

  /**
   * Get the placeholder value of an attribute.
   *
   * @param {string} attributeName
   */
  static $placeholder(attributeName) {
    const placeholder = this.$placeholders?.[attributeName] ?? attributeName;

    return placeholder;
  }

  /**
   * Translate rule messages.
   *
   * @param {Object} transalations
   * An object containing transalations with the rule name as key
   * and translation message as value.
   */
  static $withTranslations(transalations) {
    if (!this.$translations) {
      this.$translations = transalations;
    }

    this.$translations = { ...this.$translations, ...transalations };

    return this;
  }

  /**
   * Get the translated message for a validation rule.
   *
   * @param {string} ruleName
   * @param {string} [defaultMessage]
   */
  static $translation(ruleName, defaultMessage = '') {
    const trans = this.$translations?.[ruleName];

    return trans ?? defaultMessage;
  }

  /**
   * Add a custom validation rule.
   *
   * @param  {...any} rule
   */
  static $withRule(...rule) {
    const customRules = this.$customRules ?? [];

    this.$customRules = customRules.concat(rule);

    return this;
  }

  /**
   * Find a rule by name.
   *
   * @param {string} ruleName
   */
  static $findRule(ruleName) {
    const validationRule = this.$customRules?.filter((rule) => rule.name() === ruleName)[0];

    return validationRule;
  }
}
