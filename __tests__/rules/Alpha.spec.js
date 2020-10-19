import Alpha from '../../src/rules/Alpha';

describe('Alpha rule', () => {
  const rule = new Alpha();

  test('should fail validation', () => {
    expect(rule.passes('5a8b')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('kodnificent')).toBeTruthy();
  });
});
