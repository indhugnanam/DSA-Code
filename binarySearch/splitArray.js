// https://leetcode.com/problems/split-array-largest-sum/
function splitArray(nums, split) {

    let start = 0;
    let end = 0;

    for (let i = 0; i <= nums.length-1; i++) {
        if (start < nums[i]) {
            start = nums[i];
        }
        end+=nums[i];
    }
    console.log(start, end)

    return search(nums, split, start, end);
}

function search(nums, split, start, end) {

    while(start <= end) {
        let sum = 0;
        let piece = 1;

        let mid = Math.floor(start + (end-start)/2);

        for (let i=0; i<= nums.length-1; i++){
            if (sum + nums[i] > mid) {
                sum = nums[i];
                piece++;
            } else {
                sum += nums[i];
            }
        }

        if (piece > split) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    // console.log(start, end)
    return start;
}



console.log(splitArray([1,2,3,4,5,6,7,8,9,10], 5));
console.log(splitArray([3,2,2,4,1,4], 3));
console.log(splitArray([1,2,3,1,1], 4));