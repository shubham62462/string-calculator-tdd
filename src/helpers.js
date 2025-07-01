function parseDelimiters(numbers) {
    if (!numbers.startsWith("//")) {
        return { delimiters: [","], numbers };
    }
    
    // Support for multiple delimiters of any length using square brackets
    const multiDelimiterMatch = numbers.match(/^\/\/(\[[^\]]+\])+\n(.*)/);
    if (multiDelimiterMatch) {
        // Extract all delimiters from the brackets
        const delimiterMatches = numbers.match(/\[([^\]]+)\]/g);
        const delimiters = delimiterMatches.map(match => match.slice(1, -1)); // Remove brackets
        return { delimiters, numbers: multiDelimiterMatch[2] };
    }
    
    // Support for single delimiter of any length using square brackets
    const singleDelimiterMatch = numbers.match(/^\/\/\[([^\]]+)\]\n(.*)/);
    if (singleDelimiterMatch) {
        return { delimiters: [singleDelimiterMatch[1]], numbers: singleDelimiterMatch[2] };
    }
    
    // Fallback for single character delimiter (backward compatibility)
    const singleCharMatch = numbers.match(/^\/\/(.)\n(.*)/);
    if (singleCharMatch) {
        return { delimiters: [singleCharMatch[1]], numbers: singleCharMatch[2] };
    }
    
    return { delimiters: [","], numbers };
}

function splitByDelimiters(numbers, delimiters) {
    // Replace newlines with the first delimiter for consistency
    numbers = numbers.replace(/\n/g, delimiters[0]);
    
    // Split by all delimiters
    let parts = [numbers];
    delimiters.forEach(delimiter => {
        parts = parts.flatMap(part => part.split(delimiter));
    });
    
    return parts;
}

function validateNumbers(numbers) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
}

module.exports = { 
    parseDelimiters,
    splitByDelimiters,
    validateNumbers
};
