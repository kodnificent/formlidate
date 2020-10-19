/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class EndsWith {
  /**
   * Create an instance of the rule class.
   *
   * @param {array} parameters
   */
  constructor(params) {
    this.endValues = params;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'ends_with';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return this.endValues.some((endValue) => value.endsWith(endValue));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(EndsWith.name(), 'Invalid');
  }
}
