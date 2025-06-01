

function sort(numbers) {
    numbers.forEach(num => {
        console.log(`${num} ${num % 2 === 0 ? "jämt" : "udda"}`);
    });
}

// Exempelanrop av funktionen med en array
sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

module.exports = { sort };