/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Different {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([param1]) {
    this.otherField = param1;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'different';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value, values) {
    return values[this.otherField] !== value;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Different.name(), 'Invalid');
  }
}
