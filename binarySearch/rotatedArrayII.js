https://leetcode.com/problems/search-in-rotated-sorted-array-ii/submissions/1362026059/
function rotatedArrayII(nums, target) {

    let peak = findPivotWithDuplicates(nums);
    console.log(peak);

    if (peak == -1) {
        return binarySerach(nums, target, 0, nums.length-1);
    }

    if (nums[peak] == target) {
        return peak;
    }

    if (target >= nums[0]) {
        return binarySerach(nums, target, 0, peak-1);
    }

    return binarySerach(nums, target, peak+1, nums.length-1);

}

function findPivotWithDuplicates(nums) {
    let start = 0; let end = nums.length-1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);

        if (mid < end && nums[mid] > nums[mid+1]) {
            return mid;
        }

        if (mid > start && nums[mid] < nums[mid-1]) {
            return mid-1;
        }

        if (nums[start] == nums[mid] && nums[mid] == nums[end]) {
            if (nums[start] > nums[start+1]) {
                return start;
            }
            start++;
            if (nums[end] < nums[end-1]) {
                return end-1;
            }
            end--;
        }
        else if (nums[start] < nums[mid] || (nums[start] == nums[mid] && nums[mid] > nums[end])) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

function binarySerach(nums, target, start, end) {

    while (start <= end ){
        let mid = Math.floor(start + (end - start) /2);
        console.log(start, end, mid)
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

// console.log(rotatedArrayII([2,5,6,0,0,1,2], 3));
// console.log(rotatedArrayII([3,1], 3));
console.log(rotatedArrayII([3,5,1], 3));