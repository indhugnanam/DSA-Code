/**
 https://www.geeksforgeeks.org/problems/count-digits5716/1
*/

function countDigits (N){
        
    let num = Array.from(N.toString(), digit => parseInt(digit, 10));
    // let num = N.length();
    let count = 0;
    
    for (let i = 0; i<=num.length-1; i++) {
        if (N%num[i]===0) {
            count++;
        }
    }
    return count;
}

console.log(countDigits(2446));
console.log(Math.pow(12,21));
console.log(21**12);