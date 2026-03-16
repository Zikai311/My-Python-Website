function factorial(n) {
    // Input validation
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('Factorial is defined only for non-negative integers.');
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(10)); // 3628800