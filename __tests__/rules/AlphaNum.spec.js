import AlphaNum from '../../src/rules/AlphaNum';

describe('AlphaNum rule', () => {
  const rule = new AlphaNum();

  test('should fail validation', () => {
    expect(rule.passes('hello_world')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('helloworld')).toBeTruthy();
    expect(rule.passes('kod99')).toBeTruthy();
  });
});
