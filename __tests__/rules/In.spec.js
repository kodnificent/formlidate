import In from '../../src/rules/In';

describe('In rule', () => {
  const rule = new In(['published', 'draft']);

  test('should fail validation', () => {
    expect(rule.passes('review')).toBeFalsy();
  });

  test('should pass validation', () => {
    expect(rule.passes('draft')).toBeTruthy();
    expect(rule.passes('published')).toBeTruthy();
  });
});
