https://leetcode.com/problems/search-in-rotated-sorted-array/
function rotatedArray(nums, target) {

    let pivot = findPivot(nums);
    // console.log(pivot);

    if (nums[pivot] == target) {
        return pivot;
    }
    
    if (pivot == -1) {
        return binarySerach(nums, target, 0, nums.length-1);
    }

    if (target >= nums[0]) {
        return binarySerach(nums, target, 0, pivot-1);
    }
    
    return binarySerach(nums, target, pivot+1, nums.length-1);
    
 
}

function findPivot(nums) {
    let start = 0; let end = nums.length-1;

    while (start <= end) {
         let mid = Math.floor(start + (end - start)/2);

         if (mid < end && nums[mid] > nums[mid+1]) {
            return mid;
         }

         if (mid > start && nums[mid] < nums[mid-1]) {
            return mid-1;
         }

         if (nums[start] >= nums[mid]) {
            end = mid -1;
         } else {
            start = mid + 1;
         }
    }
    return -1;
}

function binarySerach(nums, target, start, end) {

    while (start <= end ){
        let mid = Math.floor(start + (end - start) /2);

        if (target < nums[mid]) {
            end = mid -1;
        } else  if (target > nums[mid]) {
            start = mid +1;
        } else {
            return mid;
        }
    }
    return -1;

}



console.log(rotatedArray([4,5,6,7,0,1,2], 0));
console.log(rotatedArray([1,3], 3));
console.log(rotatedArray([3,1], 3));
console.log(rotatedArray([3,5,1], 3));
