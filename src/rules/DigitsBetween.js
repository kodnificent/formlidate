/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class DigitsBetween {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([min, max]) {
    this.min = min;
    this.max = max;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'digits_between';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    if (this.min && this.max) {
      return new RegExp(`^\\d{${this.min},${this.max}}$`).test(value);
    }

    return new RegExp(`^\\d{${this.min},}$`).test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(DigitsBetween.name(), 'Invalid');
  }
}
