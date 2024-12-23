function reverse(n, num) {

    // if (num < 1) {
    //     return n;
    // }

    // return reverse(Math.floor(num / 10), (n*10) + (num%10));

    // let num = 0;
    while(n > 0) {
        num = (num*10) + n%10;
        n = Math.floor(n/10);
    }
    return num
}

console.log(reverse(123456, 0));
