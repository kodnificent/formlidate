import LessThanOrEqual from '../../src/rules/LessThanOrEqual';

describe('LessThanOrEqual rule', () => {
  const rule = new LessThanOrEqual(['max']);

  test('should fail validation', () => {
    expect(rule.passes(15, { max: 10 })).toBeFalsy();
    expect(rule.passes('longerstring', { max: 'string' })).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(5, { max: 10 })).toBeTruthy();
    expect(rule.passes(10, { max: 10 })).toBeTruthy();
    expect(rule.passes([1, 2], { max: [1, 2, 3, 4]})).toBeTruthy();
    expect(rule.passes([1, 2, 3, 4], { max: [1, 2, 3, 4]})).toBeTruthy();
  });
});
