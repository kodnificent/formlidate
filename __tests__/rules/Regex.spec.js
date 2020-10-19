import Regex from '../../src/rules/Regex';

describe('Regex rule', () => {
  const rule = new Regex([/^\d{4,}$/]);

  test('should fail validation', () => {
    expect(rule.passes(434)).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(4543)).toBeTruthy();
    expect(rule.passes(11115)).toBeTruthy();
  });
});
