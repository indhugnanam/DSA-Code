function isPrime(n) {
    if (n<2) {
        return false;
    }

    for (let i=2; i<= Math.sqrt(n); i++) { // Big-O - O(sqrt(n))
    // for (let i=2; i< n; i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(7)); // true
console.log(isPrime(8)); // false

// Big-O - O(n)