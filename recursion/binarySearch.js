function binarySearch() {
    let arr = [1, 3, 4, 8, 9, 12, 16, 32, 33];
    let n = 8;
    
    return search(0, arr.length-1, n, arr);
}

function search(start, end, target, arr) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] == target ) {
        return mid;
    }

    if (target < arr[mid]) {
       return search(0, mid-1, target, arr);
    }

    return search(mid+1, end, target, arr);

}

console.log(binarySearch());