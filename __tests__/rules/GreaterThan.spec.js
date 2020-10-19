import GreaterThan from '../../src/rules/GreaterThan';

describe('GreaterThan rule', () => {
  const rule = new GreaterThan(['min']);

  test('should fail validation', () => {
    expect(rule.passes(10, { min: 15 })).toBeFalsy();
    expect(rule.passes(10, { min: 10 })).toBeFalsy();
    expect(rule.passes('string', { min: 'longerstring' })).toBeFalsy();
    expect(rule.passes([1, 2, 3], { min: [1, 2, 3, 4, 5] })).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(10, { min: 5 })).toBeTruthy();
    expect(rule.passes('longerstring', { min: 'string' })).toBeTruthy();
    expect(rule.passes([1, 2, 3, 4], { min: [1, 2] })).toBeTruthy();
  });
});
