const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself for single number', () => {
    expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('returns sum of any number of comma-separated values', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('supports newline as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
});
