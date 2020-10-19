import DigitsBetween from '../../src/rules/DigitsBetween';

describe('DigitsBetween rule', () => {
  const rule = new DigitsBetween([4,8]);

  test('should fail validation', () => {
    expect(rule.passes(123)).toBeFalsy();
    expect(rule.passes(123456789)).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(1234)).toBeTruthy();
    expect(rule.passes(123456)).toBeTruthy();
  });

  test('should pass validation with only min param passed', () => {
    const rule = new DigitsBetween([4]);
    expect(rule.passes(123456789)).toBeTruthy();
  });
});
