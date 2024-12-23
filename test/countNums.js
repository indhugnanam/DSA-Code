function countNums(nums, n) {
    
    let count = 0;

    while(nums > 0) {
       
        if (nums % 10 === n) {
            count++;
        }
        nums = Math.floor(nums / 10);
    }
    return count;
}

let num = 123456;
// console.log(Math.floor(23544656598 / 10));
// console.log(Math.floor(2354465659 / 10));
// console.log(Math.floor(235446565 / 10));
// console.log(Math.floor(23544656 / 10));

console.log(countNums(num, 5));