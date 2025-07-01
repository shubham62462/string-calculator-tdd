# String Calculator TDD

A Test-Driven Development (TDD) implementation of the String Calculator kata in Node.js using Jest.

## Features

The String Calculator supports the following operations:

### Basic Operations
- **Empty string**: Returns 0
- **Single number**: Returns the number itself
- **Multiple numbers**: Sums comma-separated numbers
- **Newline delimiters**: Supports `\n` as an alternative delimiter

### Custom Delimiters
- **Single character**: `//;\n1;2` → 3
- **Any length**: `//[***]\n1***2***3` → 6
- **Multiple delimiters**: `//[*][%]\n1*2%3` → 6
- **Multiple long delimiters**: `//[**][%%]\n1**2%%3` → 6

### Validation
- **Negative numbers**: Throws error with list of negative numbers
- **Large numbers**: Ignores numbers greater than 1000

## Usage Examples

```javascript
const { add } = require('./src/stringCalculator');

// Basic operations
add("")           // → 0
add("1")          // → 1
add("1,2")        // → 3
add("1,2,3,4")    // → 10

// Newline delimiters
add("1\n2,3")     // → 6

// Custom delimiters
add("//;\n1;2")           // → 3
add("//[***]\n1***2***3") // → 6
add("//[*][%]\n1*2%3")    // → 6
add("//[**][%%]\n1**2%%3") // → 6

// Validation
add("2,1001")     // → 2 (ignores 1001)
add("1,-2")       // → Error: "negatives not allowed: -2"
```

## Project Structure

```
string-calculator-tdd/
├── src/
│   ├── stringCalculator.js  # Main calculator function
│   └── helpers.js           # Helper functions for parsing and validation
├── tests/
│   └── stringCalculator.test.js  # Test suite
├── package.json
└── README.md
```

### Helper Functions

The implementation is organized into focused helper functions:

- **`parseDelimiters(numbers)`**: Extracts delimiters and numbers from input string
- **`splitByDelimiters(numbers, delimiters)`**: Splits numbers by all specified delimiters
- **`validateNumbers(numbers)`**: Validates for negative numbers and throws appropriate errors

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Test Coverage

The test suite covers all implemented features:

- ✅ Empty string handling
- ✅ Single number processing
- ✅ Multiple comma-separated numbers
- ✅ Newline delimiter support
- ✅ Custom single-character delimiters
- ✅ Custom delimiters of any length
- ✅ Multiple custom delimiters
- ✅ Negative number validation
- ✅ Large number filtering (>1000)

## Development Approach

This project follows Test-Driven Development principles:

1. **Red**: Write a failing test
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve code structure while keeping tests green

The implementation evolved from basic functionality to complex delimiter parsing, with each step driven by tests and followed by refactoring for better code organization.

## License

ISC
