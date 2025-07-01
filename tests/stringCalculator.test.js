const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});
