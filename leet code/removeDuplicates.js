function removeDuplicates(nums) {

    let i = 0;
    while (i < nums.length) {
        for (let j=0; j<=nums.length; j++) {
            if (nums[i] == nums[i+1] || nums[i-1] == nums[i]) {
                nums.splice(i, 1);
            }
        }
        i++;
    }
    return nums;
};

console.log(removeDuplicates([0,0,0,0,0]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([0,0,1,1,1,1,3,3,3,3,3]));