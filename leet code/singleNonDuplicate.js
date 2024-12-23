function singleNonDuplicate(nums) {

    let start = 0;
    let end = nums.length-1;
    

    while (start<= end) {
        if (nums[start] == nums[start+1]) {
            start +=2;
        } else {
            return nums[start]
        }
    }
    return -1;
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate([1,1,2,3,3]));
console.log(singleNonDuplicate([1,1,2,2]));