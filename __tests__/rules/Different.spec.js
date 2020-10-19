import Different from '../../src/rules/Different';

describe('Different rule', () => {
  const rule = new Different(['primary_email']);

  test('should fail validation', () => {
    expect(rule.passes('mbamaravictor@gmail.com', { primary_email: 'mbamaravictor@gmail.com' })).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('dev@kodnificent.io', { primary_email: 'mbamaravictor@gmail.com' })).toBeTruthy();
  });
});
