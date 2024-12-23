function square(n) {
 
    let p = 0;

    for ( let i=2; i <= 9; i++ ) {
        if (n === i*i) {
            p = i;
            break;
                
        } else if (i*i > n) {
            p = i-1;
            break;
        }
    }
    console.log(n-p*p);

    return p+((n-p*p)/((n-p*p)*2));
}

console.log(square(35));
console.log(100 ** 0.5);
