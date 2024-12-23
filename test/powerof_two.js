function isPower(n) {

    if (n < 1) {
        return false;
    }
    // if (n%2 === 0) {
    return (n & (n-1)) === 0;
    // return n%2 === 0;
    // }
    // return false;
}

console.log(isPower(1)); // 
console.log(isPower(2)); // true
console.log(isPower(3)); //false
console.log(isPower(42)); //false