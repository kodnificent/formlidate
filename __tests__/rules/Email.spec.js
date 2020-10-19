import Email from '../../src/rules/Email';

describe('Email rule', () => {
  const rule = new Email();

  test('should fail validation', () => {
    expect(rule.passes('mbamaravictor@gmail')).toBeFalsy();
    expect(rule.passes('mbamaravictor@gmail.c')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('mbamaravictor@gmail.com')).toBeTruthy();
  });
});
