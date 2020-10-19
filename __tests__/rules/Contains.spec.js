import Contains from '../../src/rules/Contains';

describe('Contains rule', () => {
  const rule = new Contains(['fb.com', 'facebook.com']);

  test('should fail validation', () => {
    expect(rule.passes('https://twitter.com/kodnificent')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('https://fb.com/kodnificent')).toBeTruthy();
    expect(rule.passes('https://facebook.com/kodnificent')).toBeTruthy();
  });
});
