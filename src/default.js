export default {
  /**
   * Target form element selector.
   */
  selector: 'form',

  /**
   * Formlidate options.
   */
  options() {
    return {
      placeholders: null,
      rules: null,
      messages: null,
      fieldSelector: '[name=:attribute]',
      feedbackSelector: '[data-:attribute-feedback]',
      beforeValidate: this.beforeValidate,
      onInvalid: this.onInvalid,
      onChange: this.onChange,
      validated: this.validated,
    };
  },

  /**
   * Callback to call before validating a form.
   *
   * @param {Object} event
   */
  beforeValidate() {
    Object.values(this.$fields).forEach((field) => {
      field.feedbackEl.innerText = '';
    });
  },

  /**
   * Callback to call when a field's value changes.
   *
   * @param {Event} event
   * @param {Object} field
   */
  onChange(event, field) {
    if (!field.feedbackEl) return;

    field.feedbackEl.innerText = '';

    const { attribute } = field;
    const fields = {};

    fields[attribute] = field;

    const result = this.constructor.$validate(this.$fieldValues(), fields);

    if (!result.invalid) return;

    field.feedbackEl.innerText = result.errors[attribute];
  },

  /**
   * Callback to call when there is a validation error on a form.
   *
   * @param {Event} event
   * @param {array} errors
   */
  onInvalid(event, errors) {
    event.preventDefault();

    Object.values(this.$fields).forEach((field) => {
      if (!field.feedbackEl) return;

      field.feedbackEl.innerText = errors[field.attribute] ?? '';
    });
  },

  /**
   * Callback to call after the form passes validation.
   */
  validated() {
    //
  },
};
