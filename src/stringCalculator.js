function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiters = [","];
    if (numbers.startsWith("//")) {
        // Support for multiple delimiters of any length using square brackets
        const multiDelimiterMatch = numbers.match(/^\/\/(\[[^\]]+\])+\n(.*)/);
        if (multiDelimiterMatch) {
            // Extract all delimiters from the brackets
            const delimiterMatches = numbers.match(/\[([^\]]+)\]/g);
            delimiters = delimiterMatches.map(match => match.slice(1, -1)); // Remove brackets
            numbers = multiDelimiterMatch[2];
        } else {
            // Support for single delimiter of any length using square brackets
            const singleDelimiterMatch = numbers.match(/^\/\/\[([^\]]+)\]\n(.*)/);
            if (singleDelimiterMatch) {
                delimiters = [singleDelimiterMatch[1]];
                numbers = singleDelimiterMatch[2];
            } else {
                // Fallback for single character delimiter (backward compatibility)
                const singleCharMatch = numbers.match(/^\/\/(.)\n(.*)/);
                if (singleCharMatch) {
                    delimiters = [singleCharMatch[1]];
                    numbers = singleCharMatch[2];
                }
            }
        }
    }
    
    // Replace newlines with the first delimiter for consistency
    numbers = numbers.replace(/\n/g, delimiters[0]);
    
    // Split by all delimiters
    let parts = [numbers];
    delimiters.forEach(delimiter => {
        parts = parts.flatMap(part => part.split(delimiter));
    });
    
    parts = parts.map(n => parseInt(n));
    const negatives = parts.filter(n => n < 0);
    if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
    return parts
            .filter(num => num <= 1000)
            .reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
