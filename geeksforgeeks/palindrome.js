// https://www.geeksforgeeks.org/problems/palindrome0746/1

function palindrome(n) {
    
    let num = 0;
    let arr = Array.from(n.toString(), digit => parseInt(digit, 10));

    for (let i=0; i<= arr.length-1; i++) {
        let minus = arr.length-1;
        num = num * 10 + arr[minus - i];
    }
    return num == n ? 'Yes' :  'No';
}

console.log(palindrome(555));