https://leetcode.com/problems/find-in-mountain-array/description/

function mountainArray(arr, target ) {

    let peek = findPeakElement(arr);

    let leftIndex = search(arr, target, 0, peek);

    if (leftIndex != -1) {
        return leftIndex;
    }

    return search(arr, target, peek, arr.length-1);

};

function findPeakElement(arr) {
    let start = 0;
    let end = arr.length-1;

    while (start < end) {
        let mid = Math.floor(start + (end-start)/2);

        if (arr[mid] > arr[mid+1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
   
    return start;
}

function search(arr, target, start, end) {

   let findLeftIndex = arr[start] < arr[end];

    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (arr[mid] == target) {
            return mid;
        }

        if (findLeftIndex) {

            if (target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            } 
        } else {

            if (target > arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
   
    return -1;
}

console.log(mountainArray([1,2,3,6,5,3,1], 3));