const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself for single number', () => {
    expect(add("1")).toBe(1);
});
