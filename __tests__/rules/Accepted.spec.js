import Accepted from '../../src/rules/Accepted';

describe('Accepted rule', () => {
  const rule = new Accepted();

  test('should fail validation', () => {
    expect(rule.passes(false)).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(1)).toBeTruthy();
    expect(rule.passes('on')).toBeTruthy();
    expect(rule.passes(true)).toBeTruthy();
    expect(rule.passes('yes')).toBeTruthy();
  });
});
