import AlphaDash from '../../src/rules/AlphaDash';

describe('AlphaDash rule', () => {
  const rule = new AlphaDash();

  test('should fail validation', () => {
    expect(rule.passes('hello$')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('hello_world')).toBeTruthy();
    expect(rule.passes('kod99')).toBeTruthy();
    expect(rule.passes('kod-victor-as-my-username')).toBeTruthy();
  });
});
