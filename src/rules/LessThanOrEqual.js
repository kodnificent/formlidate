/* eslint-disable class-methods-use-this */

import Formlidate from '../Formlidate';

export default class LessThanOrEqual {
  constructor([otherFieldName]) {
    this.otherFieldName = otherFieldName;
  }

  /**
   * Get the name of the validation rule.
   */
  static name() {
    return 'lte';
  }

  /**
   * Check if a field's value passes the validation rule.
   *
   * @param {any} value Value of the field to be validated
   * @param {Object} values Values of other fields
   */
  passes(value, values) {
    if (Object.prototype.hasOwnProperty.call(value, 'length')) {
      return value.length <= values[this.otherFieldName].length;
    }

    return value <= values[this.otherFieldName];
  }

  /**
   * Get the rule's error message.
   */
  message() {
    return Formlidate.$translation(LessThanOrEqual.name(), 'Invalid');
  }
}
