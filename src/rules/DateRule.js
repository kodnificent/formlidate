/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class DateRule {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'date';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value) {
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(Date.parse(value));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(DateRule.name(), 'Invalid date');
  }
}
