/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Regex {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor([pattern]) {
    this.pattern = pattern;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'regex';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value) {
    return new RegExp(this.pattern).test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Regex.name(), 'Invalid');
  }
}
