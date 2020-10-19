import RequiredIf from '../../src/rules/RequiredIf';

describe('RequiredIf rule', () => {
  const rule = new RequiredIf(['name', 'victor']);
  const value = 'fullstack developer';

  test('should pass if dependent field is present and validated field is not empty', () => {
    expect(rule.passes(value, {name: 'victor'})).toBeTruthy();
  });

  test('should pass if dependent field is a different value and validated field is not empty', () => {
    expect(rule.passes(value, {name: 'wisdom'})).toBeTruthy();
  });

  test('should pass if dependent field is absent and validated field is not empty', () => {
    expect(rule.passes(value, {})).toBeTruthy();
  });

  test('should pass if dependent field is absent and validated field is empty', () => {
    expect(rule.passes('', {})).toBeTruthy();
  });

  test('should fail if dependent field is present and validated field is empty', () => {
    expect(rule.passes('', {name: 'victor'})).not.toBeTruthy();
  });
});
