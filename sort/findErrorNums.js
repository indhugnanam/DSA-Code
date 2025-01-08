function findErrorNums(nums) {
    let i = 0;

    while (i < nums.length) {
        let correct = nums[i] - 1;

        if (nums[i] != nums[correct]) {
            swap(nums, i, correct);
        } else {
            i++;
        }
    }

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != index + 1) {
            return nums[index], index+1;
        }
    }
    return [-1, -1];
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

// console.log(findErrorNums([1, 2, 2, 4]));
// console.log(findErrorNums([1, 1]));
// console.log(findErrorNums([2, 2]));
console.log(findErrorNums([3,2,2]));
