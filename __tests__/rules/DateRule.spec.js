import DateRule from '../../src/rules/DateRule';

describe('DateRule rule', () => {
  const rule = new DateRule();

  test('should fail validation', () => {
    expect(rule.passes('invalid date')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('2020-09-10 08:00')).toBeTruthy();
  });
});
