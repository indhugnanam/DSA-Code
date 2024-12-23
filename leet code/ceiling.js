function ceiling(arr, x) {
    // let start = 0;
    // let end = arr.length-1;

    let start = 0; let end = arr.length-1;
       
    while (start <= end) {
        if (x > arr[arr.length-1] || x < arr[0]) {
            return -1;
        }
        let mid = Math.floor(start + (end- start) / 2);
       
        if (x < arr[mid]) {
            end = mid-1;
        } else if (x > arr[mid]) {
            start = mid+1;
        } else {
            return arr[mid];
        }
    }
    return arr[end];
}

console.log(ceiling([1,2,8,10,11,12,19], 19));