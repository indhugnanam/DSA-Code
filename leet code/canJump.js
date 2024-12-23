function canJump(nums) {

    let currentIndex = nums.length-1
    for (let i=nums.length-1; i >=0; i--) { 
        if (i+nums[i] >= currentIndex) {
            currentIndex = i;
        }
        console.log(i+nums[i], currentIndex)
    }

    return currentIndex == 0;
}

// console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,3,1,1,4]));
// console.log(canJump([0]));
// console.log(canJump([2,0,0]));
// console.log(canJump([2,5,0,0]));
