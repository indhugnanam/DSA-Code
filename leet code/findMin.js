function findMin(nums) {
 
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
        
        if (nums[start] > nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function search(start, end, nums) {
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (nums[mid] < nums[mid+1]) {
            end = mid - 1;
        } else if (nums[mid] > nums[mid+1]) {
            start = mid + 1;
        }
        else {
            return nums[mid];
        }
    }
    return nums[start];
}

console.log(findMin([3,4,5,1,2]))