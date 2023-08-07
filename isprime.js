function isPrime(number) {
    if (number <= 1) {
        return false; // 0 and 1 are not prime
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible by any number between 2 and the square root, it's not prime
        }
    }
    
    return true;
}

// Test the isPrime function
// console.log(isPrime(5)); // Output: true
// console.log(isPrime(10)); // Output: false
// console.log(isPrime(17)); // Output: true
// console.log(isPrime(25)); // Output: false

// let x = 2;
// let y = Math.sqrt(x);
// console.log(y);