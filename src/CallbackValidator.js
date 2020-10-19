/* eslint-disable class-methods-use-this */

export default class CallbackValidator {
  /**
   * Create an instance of a callback validator.
   *
   * @param {function} callback
   */
  constructor(callback) {
    this.callback = callback;
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   * @param {string} attribute Attribute name of the field under validation
   */
  passes(value, values, attribute) {
    this.errorMessage = this.callback.call(this, value, values, attribute);

    return this.errorMessage === true;
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return this.errorMessage ?? 'Invalid';
  }
}
