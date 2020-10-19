/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Accepted {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'accepted';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value) {
    return value === 'yes' || value === 'on' || value === 1 || value === true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Accepted.name(), 'Invalid');
  }
}
