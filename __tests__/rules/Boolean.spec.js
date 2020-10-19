import BooleanRule from '../../src/rules/Boolean';

describe('Boolean rule', () => {
  const rule = new BooleanRule();

  test('should fail validation', () => {
    expect(rule.passes('11')).toBeFalsy();
    expect(rule.passes('string')).toBeFalsy();
    expect(rule.passes(80)).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(true)).toBeTruthy();
    expect(rule.passes(false)).toBeTruthy();
    expect(rule.passes('true')).toBeTruthy();
    expect(rule.passes('false')).toBeTruthy();
    expect(rule.passes('1')).toBeTruthy();
    expect(rule.passes('0')).toBeTruthy();
    expect(rule.passes(1)).toBeTruthy();
    expect(rule.passes(0)).toBeTruthy();
  });
});
