/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class AlphaDash {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'alpha_dash';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return Boolean(String(value).match(/^[A-Za-z0-9_-]+$/));
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(AlphaDash.name(), 'Invalid');
  }
}
