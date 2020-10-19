/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Digits {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([param1]) {
    this.exactLength = param1;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'digits';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return new RegExp(`^\\d{${this.exactLength}}$`).test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Digits.name(), 'Invalid');
  }
}
