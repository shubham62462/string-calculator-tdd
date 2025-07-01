function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        // Support for delimiters of any length using square brackets
        const match = numbers.match(/^\/\/\[([^\]]+)\]\n(.*)/);
        if (match) {
            delimiter = match[1];
            numbers = match[2];
        } else {
            // Fallback for single character delimiter (backward compatibility)
            const singleCharMatch = numbers.match(/^\/\/(.)\n(.*)/);
            if (singleCharMatch) {
                delimiter = singleCharMatch[1];
                numbers = singleCharMatch[2];
            }
        }
    }
    numbers = numbers.replace(/\n/g, delimiter);
    const parts = numbers.split(delimiter).map(n => parseInt(n));
    const negatives = parts.filter(n => n < 0);
    if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
    return parts
            .filter(num => num <= 1000)
            .reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
