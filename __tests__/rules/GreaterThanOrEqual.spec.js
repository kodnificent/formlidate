import GreaterThanOrEqual from '../../src/rules/GreaterThanOrEqual';

describe('GreaterThanOrEqual rule', () => {
  const rule = new GreaterThanOrEqual(['min']);

  test('should fail validation', () => {
    expect(rule.passes(10, { min: 15 })).toBeFalsy();
    expect(rule.passes([1, 2, 3], { min: [1, 2, 3, 4] })).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(15, { min: 15 })).toBeTruthy();
    expect(rule.passes(20, { min: 15 })).toBeTruthy();
    expect(rule.passes([1, 2, 3, 4], { min: [1, 2, 3, 4] })).toBeTruthy();
    expect(rule.passes([1, 2, 3, 4, 5], { min: [1, 2, 3, 4] })).toBeTruthy();
  });
});
