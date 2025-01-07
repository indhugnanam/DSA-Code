/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        let last = nums.length-1;
        let check = checkDuplicate(nums, i, last);
        console.log(check);
        if (check != -1) {
            return check;
        }
    }
};

function checkDuplicate(nums, start, end) {
    for (let i = start; i <= end; i++) {
        if (nums[start] == nums[i+1]) {
            return nums[start];
        }
    }
    return -1;
}

console.log(findDuplicate([3,1,3,4,2]));