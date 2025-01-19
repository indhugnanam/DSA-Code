// function fibonacci(fib, len) {
//     let n = fib.length;

//     if (n == len) {
//         return fib;
//     }
//     fib.push(fib[n-1] + fib[n-2]);

//     return fibonacci(fib, len)

// }


// console.log(fibonacci([1, 2], 5));

function fibonacci(n) {
    return fibo(n);
}

function fibo(n) {
    if (n < 2) {
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}


console.log(fibonacci(8));