/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class ArrayRule {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'array';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    if (!(value instanceof Array)) {
      return false;
    }

    return true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(ArrayRule.name(), 'Invalid');
  }
}
