import EndsWith from '../../src/rules/EndsWith';

describe('EndsWith rule', () => {
  const rule = new EndsWith(['com', 'com.ng', 'ng']);

  test('should fail validation', () => {
    expect(rule.passes('domain.co')).toBeFalsy();
    expect(rule.passes('domain.com.gh')).toBeFalsy();
    expect(rule.passes('domain.io')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('domain.com')).toBeTruthy();
    expect(rule.passes('domain.com.ng')).toBeTruthy();
    expect(rule.passes('domain.ng')).toBeTruthy();
  });
});
