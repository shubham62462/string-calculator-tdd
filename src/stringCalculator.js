function add(numbers) {
    if (numbers === "") return 0;
    
    numbers = numbers.replace(/\n/g, ",");
    const parts = numbers.split(",");
    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
