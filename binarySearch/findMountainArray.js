function FindMountainArray(target, mountainArr) {

    let peak = findPeak(mountainArr);

    let leftIndex = orderAgnosticBS(target, mountainArr, 0, peak, true);

    if (leftIndex != -1) {
        return leftIndex;
    }

    return orderAgnosticBS(target, mountainArr, peak, mountainArr.length-1, false);

}

function findPeak(mountainArr) {
    let start = 0; let end = mountainArr.length-1;

    while (start < end) {
        let mid = Math.floor(start + (end-start) / 2);

        if (mountainArr[mid] > mountainArr[mid+1]) {
            end = mid;
        }
        if (mountainArr[mid] < mountainArr[mid+1]) {
            start = mid + 1;
        }
    }
    return start;
}

function orderAgnosticBS(target, mountainArr, start, end, leftIndex) {

    while (start <= end) {
        let mid = Math.floor(start + (end-start) / 2);

        if (target == mountainArr[mid]) {
            return mid;
        }

        if (leftIndex) {
            if (target < mountainArr[mid]) {
                end = mid - 1;
            } else  {
                start = mid + 1;
            }
        } else {
            if (target > mountainArr[mid]) {
                end = mid - 1;
            } else  {
                start = mid + 1;
            }
        }
    }
    return -1;
}

console.log(FindMountainArray(3, [1,2,3,4,5,3,1]));