function recursiveFibonacci(n) {
    // let fib = [0,1];

    // for (let i = 2; i<=n; i++) {
    //     fib[i] = fib[i-1] + fib[i-2];
    // }
    // return fib[n];

    if (n<2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(12));
console.log(recursiveFibonacci(20));