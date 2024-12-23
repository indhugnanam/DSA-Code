function armstrongNumber(n) {
    // code here
    let arr = Array.from(n.toString());
    
    let sum = 0;
    
    for(let i = 0; i<=arr.length-1; i++) {
        sum += arr[i]*arr[i]*arr[i];
    }
    return n == sum ? true : false;
}

console.log(armstrongNumber(153));