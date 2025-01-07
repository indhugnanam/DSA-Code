function insertionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j > 0; j--) {
            if (nums[j] < nums [j-1]) {
                swap(nums, j, j-1);
            } else {
                break;
            }
        }
    }
    return nums;
}

function swap(arr, first, second) {
    console.log(arr, first, second)
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(insertionSort([-1,5,3,4,0]));