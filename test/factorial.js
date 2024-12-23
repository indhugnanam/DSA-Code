function factorial(n) {
    let fact = 1;

    for ( let i=2; i<=n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(2)); //1*2 = 2
console.log(factorial(3)); //1*2*3 = 6
console.log(factorial(4)); //1*2*3*4 = 24
console.log(factorial(5)); //1*2*3*4*5 = 120
// Big-O - O(n)