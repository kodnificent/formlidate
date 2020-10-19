import Required from '../../src/rules/Required';

describe('Required rule', () => {
  const rule = new Required();

  test('should return correct rule name', () => {
    expect(Required.name()).toBe('required');
  });

  test('should fail an empty file name', () => {
    const file = new File([], '');

    expect(rule.passes(file)).not.toBeTruthy();
  });

  test('should fail empty array and array with empty string as first value', () => {
    expect(rule.passes([])).not.toBeTruthy();
    expect(rule.passes([''])).not.toBeTruthy();
  });

  test('should fail an empty string, null or undefined value', () => {
    expect(rule.passes('')).not.toBeTruthy();
    expect(rule.passes(null)).not.toBeTruthy();
    expect(rule.passes(undefined)).not.toBeTruthy();
  });
});
