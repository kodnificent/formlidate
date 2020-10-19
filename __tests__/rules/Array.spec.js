import ArrayRule from '../../src/rules/Array';

describe('Array rule', () => {
  const rule = new ArrayRule();

  test('should fail validation', () => {
    expect(rule.passes({ hello: 'world'})).toBeFalsy();
    expect(rule.passes('a string')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(['apple', 'banana', 'lemon'])).toBeTruthy();
  });
});
