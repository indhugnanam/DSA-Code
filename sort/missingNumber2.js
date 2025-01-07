var missingNumber = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let correct = nums[i] - 1;
        if (nums[i] != nums[correct]) {
            swap(nums, i, correct);
        } else {
            i++;
        }
    }

    let arr = [];

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != index+1) {
            arr.push(index+1);
        }
    }

    return arr;
};

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(missingNumber([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(missingNumber([1, 1]));
