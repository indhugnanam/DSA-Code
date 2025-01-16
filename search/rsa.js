function rsa(nums, target) {
    let pivot = findPivot(nums, target);
    console.log(pivot);

     if (pivot == -1) {
        return -1;
     }

     if (nums[pivot] == target) {
        return pivot;
     }

     if (target > nums[pivot]) {
        return search(nums, target, 0, pivot);
    } else {
        return search(nums, target, pivot, nums.length-1);
    }

}

function findPivot(nums, target) {

    let start = 0;
    let end = nums.length-1;

    while(start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (nums[mid] == target) {
            return mid;
        }

        // if (nums[mid] > target) {
        //     return mid;
        // }

        // if (nums[mid] < target) {
        //     return mid;
        // }

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

function search(nums, target, start, end) {

    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (nums[mid] == target) {
            return mid;
        }

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}


// let nums = [4,5,6,7,0,1,2];
let nums = [4,5,6,0,1,2,3];
// let nums = [5,6,0,1,2,3,4];
// let nums = [4,5,6,0,1,2];
let target = 7;

console.log(rsa(nums, target));