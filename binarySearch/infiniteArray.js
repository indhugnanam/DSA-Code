function infiniteArray(nums, target) {
    let start = 0; let end = 1;

    while(target > nums[end]) {
        let temp = end + 1;
        end = end + (end - start+1) * 2;
        start = temp;
    }
    return orderAgnosticBS(nums, target, start, end);
}

function orderAgnosticBS(nums, target, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (target < nums[mid]) {
             end = mid - 1;
        } else  if (target > nums[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(infiniteArray([2,3,4,6,7,9,10,12,14,15,17,19,21], 21));