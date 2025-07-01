function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.)\n(.*)/);
        delimiter = match[1];
        numbers = match[2];
    }
    numbers = numbers.replace(/\n/g, delimiter);
    const parts = numbers.split(delimiter);
    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
