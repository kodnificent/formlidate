import Same from '../../src/rules/Same';

describe('Same rule', () => {
  const rule = new Same(['email']);

  test('should fail validation', () => {
    expect(rule.passes('wrongemail@example.com', { email: 'myemail@example.com' })).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('myemail@example.com', { email: 'myemail@example.com' })).toBeTruthy();
  });
});
