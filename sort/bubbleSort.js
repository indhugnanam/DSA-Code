function bubbleSort(nums) {

    for( let i=0; i<= nums.length-1; i++) {
        let swapped = false;
        for (j= 1; j<= nums.length-i; j++) {
            if (nums[j] < nums[j-1]) {
                swapped = true;
                let temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }
        }

        if (!swapped) {
            return nums;
        }
    }
}

console.log(bubbleSort([3, 1, 5, 4, 2]));