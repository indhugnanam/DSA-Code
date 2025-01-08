function firstMissingPositive(nums) {
    let i = 0;

    while (i < nums.length) {
        let correct = nums[i] - 1;

        if (nums[i] != nums[correct] && nums[i] > 0 && nums[i] <= nums.length) {
            swap(nums, i, correct);
        } else {
            i++;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        // console.log(nums[j], j+1)
        if (nums[j] != j+1) {
            return j+1;
        }
    }
    return nums.length+1;
}

function swap(arr, first, second) {
    // console.log(arr, first, second)
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([1, 2, 3, 4, 5]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
