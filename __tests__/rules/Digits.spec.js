import Digits from '../../src/rules/Digits';

describe('Digits rule', () => {
  const rule = new Digits([4]);

  test('should fail validation', () => {
    expect(rule.passes(1234567)).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(1234)).toBeTruthy();
  });
});
