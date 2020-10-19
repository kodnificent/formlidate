/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';
import Required from './Required';

export default class RequiredIf {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([dependentField, dependentValue]) {
    this.dependentField = dependentField;
    this.dependentValue = dependentValue;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'required_if';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value, values) {
    return values[this.dependentField] === this.dependentValue
      ? (new Required()).passes(value)
      : true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(RequiredIf.name(), 'Required');
  }
}
