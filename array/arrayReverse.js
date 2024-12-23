function arrayReverse(arr) {

    let start = 0;
    let end = arr.length-1;

    // while (start < end) {
    //     let temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     start++;
    //     end--;
    // }

    // return arr;


    for (let i=0; i<=Math.floor(arr.length/2); i++) {
        let end = arr.length-1;
        let temp = arr[i];
        arr[i] = arr[end-i];
        arr[end-i] = temp;
    }

    return arr;

}

let arr = [1, 24, 15, 9, 7, 8, 56,43, 4]

console.log(arrayReverse(arr));