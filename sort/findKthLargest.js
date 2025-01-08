// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

// function findKthLargest(nums, k) {

//     nums.sort(function(a, b){return b - a});
//     return nums[k-1];
// }

function findKthLargest(nums, k) {

    for (let i = 0; i < nums.length; i++) {
        let maxIndex = findMaxIndex(nums, i, nums.length);
        swap(nums, maxIndex, i);
    }
    return nums[k-1];
}

function findMaxIndex(nums, start, end) {
    let max = start;

    for (let i = start; i < end; i++) {
        if (nums[max] < nums[i + 1]) {
            max = i + 1;
        }
    }
    return max;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 2));
