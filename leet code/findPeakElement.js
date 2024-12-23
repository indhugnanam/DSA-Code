// https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/1342830267/
// https://leetcode.com/problems/find-peak-element/


function findPeakElement(nums) {
    let start = 0;
    let end = nums.length-1;

    while (start < end) {
        let mid = (start + (end-start)/2) - ((start + (end-start)/2)%1);

        if (nums[mid] > nums[mid+1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
   
    return start;
};

console.log(findPeakElement([1,2,3,4,5,7,6,5,3]));