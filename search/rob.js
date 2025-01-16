function rob(nums) {

    let rob1 = 0; let rob2 = 0;

    for (let i=0; i <= nums.length-1; i++) {
       let temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
        console.log(rob1, rob2)
    }
    return rob2;
}

// console.log(rob([1,2,3,1]));
// console.log(rob([1,1]));
console.log(rob([2,7,9,3,1]));
// console.log(rob([1,2]));
// console.log(rob([2,1,1,2]));
