/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class StartsWith {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor(params) {
    this.expectedValues = params;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'starts_with';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return this.expectedValues.some((expectedValue) => String(value).startsWith(expectedValue));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(StartsWith.name(), 'Invalid');
  }
}
