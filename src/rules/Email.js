/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Email {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'email';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    return /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.\w{2,}$/.test(value);
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Email.name(), 'Invalid email');
  }
}
