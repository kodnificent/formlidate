import FileRule from '../../src/rules/File';

describe('File rule', () => {
  const rule = new FileRule();
  const file = new File([], 'file.pdf');

  test('should fail validation', () => {
    expect(rule.passes('not a file')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes(file)).toBeTruthy();
    expect(rule.passes([file])).toBeTruthy();
  });
});
