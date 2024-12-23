function isPerfectNumber(n) {
    let sum = 0;
      
    for ( let i = 1; i < n; i++) {
        if (n%i === 0) {
           sum += i;
        }
    }

    console.log(Math.sqrt(n))
    return sum == n ? 1 : 0;
}

console.log(isPerfectNumber(5));