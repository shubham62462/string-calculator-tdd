function add(numbers) {
    if (numbers === "") return 0;
    
    const parts = numbers.split(",");
    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
