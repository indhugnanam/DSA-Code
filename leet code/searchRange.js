https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums, target) {
    let ans = [-1, -1];

    ans[0] = search(nums, target, true);
    ans[1] = search(nums, target, false);

    return ans;
}

function search(nums, target, leftIndex) {
    let start = 0;
    let end = nums.length-1;
    let ans = -1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end-start) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            ans = mid;
            console.log(ans)
            if (leftIndex) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return ans;
}


console.log(searchRange([5,7,7,8,8,10], 7));
// let num = 5/2;
// console.log(~~num);
// console.log(num | 0) // 2
// console.log(num << 0) // 2
// console.log(num - (num % 1)) // 2