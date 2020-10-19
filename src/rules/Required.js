/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class Required {
  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'required';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   */
  passes(value) {
    if (value instanceof File) return value.name !== '';

    if (value instanceof Array && value[0] instanceof File) return value[0].name !== '';

    if (value instanceof Array) {
      // empty multiple file fields returns an array
      // with the first value as empty string in some browsers
      return value.length === 1 ? value[0] !== '' : value.length > 0;
    }

    if (value instanceof Object) return Object.keys(value).length > 0;

    return value !== '' && value !== null && typeof value !== 'undefined';
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(Required.name(), 'Required');
  }
}
