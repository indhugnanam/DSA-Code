function findMinRotatedArrayII(nums) {
 
    let peak = findPeak(nums);
    console.log(peak)

    if (peak == -1) {
        return search(0, nums.length-1, nums);
    }
    if (nums[peak] > nums[peak+1] ) {
        return nums[peak+1];
    } else {
        return search(0, peak, nums);
    }
}

function findPeak(nums) {
    let start = 0; let end = nums.length-1;

    while (start < end) {
        let mid = Math.floor(start + (end-start)/2);

        if (nums[mid] > nums[mid+1]) {
            return mid;
        }

        if (nums[mid] < nums[mid-1]) {
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
        
        // if (nums[start] > nums[mid]) {
        //     end = mid - 1;
        // } else {
        //     start = mid + 1;
        // }
    }
    return -1;
}

function search(start, end, nums) {
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);
        console.log(start, mid, end)

        if (nums[mid] <= nums[mid+1]) {
            end = mid - 1;
        } else if (nums[mid] >= nums[mid+1]) {
            start = mid + 1;
        }
        else {
            return nums[mid];
        }
    }
    return nums[start];
}

console.log(findMinRotatedArrayII([1,3,3]))