/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class BooleanRule {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'boolean';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return [true, false, 'true', 'false', '1', '0', 1, 0].includes(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(BooleanRule.name(), 'Invalid');
  }
}
