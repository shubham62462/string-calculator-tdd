const { parseDelimiters, splitByDelimiters, validateNumbers } = require('./helpers');

function add(numbers) {
    if (numbers === "") return 0;
    
    const { delimiters, numbers: numbersString } = parseDelimiters(numbers);
    const parts = splitByDelimiters(numbersString, delimiters);
    const numbersArray = parts.map(n => parseInt(n));
    
    validateNumbers(numbersArray);
    
    return numbersArray
        .filter(num => num <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
