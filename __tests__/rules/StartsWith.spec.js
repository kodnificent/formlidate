import StartsWith from '../../src/rules/StartsWith';

describe('StartsWith rule', () => {
  const rule = new StartsWith(['fb', 'facebook']);

  test('should fail validation', () => {
    expect(rule.passes('tw')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('fb.com')).toBeTruthy();
    expect(rule.passes('facebook.com')).toBeTruthy();
  });
});
