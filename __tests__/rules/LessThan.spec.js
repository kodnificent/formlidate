import LessThan from '../../src/rules/LessThan';

describe('LessThan rule', () => {
  const rule = new LessThan(['max']);

  test('should fail validation', () => {
    expect(rule.passes(15, { max: 10 })).toBeFalsy();
    expect(rule.passes(10, { max: 10 })).toBeFalsy();
    expect(rule.passes('longerstring', { max: 'string' })).toBeFalsy();
    expect(rule.passes([1, 2, 3, 4, 5], { max: [1, 2, 3]})).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(5, { max: 10 })).toBeTruthy();
    expect(rule.passes('string', { max: 'longerstring' })).toBeTruthy();
    expect(rule.passes([1, 2], { max: [1, 2, 3, 4]})).toBeTruthy();
  });
});
