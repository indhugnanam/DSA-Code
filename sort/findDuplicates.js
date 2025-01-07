// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// https://leetcode.com/problems/find-the-duplicate-number/submissions/1500828079/

function findDuplicates (nums) {
    let i = 0;

    while(i < nums.length) {
        let correct = nums[i] - 1;
        
        if (nums[i] != nums[correct]) {
            swap(nums, i, correct);
        } else {
            i++;
        }
    }
    let arr = [];

    for(let i=0; i< nums.length;i++) {
        if (nums[i] != i+1) {
            arr.push(nums[i]);
        }
    }

    console.log(nums);
    return arr;
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));