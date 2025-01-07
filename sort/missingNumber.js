function missingNumber(arr) {
    let i = 0;

    while(i < arr.length) {
        let correct = arr[i];

        // console.log(i, arr[i], arr[correct]);
        if (arr[i] < arr.length && arr[i] != arr[correct]) {
            swap(arr, i, correct);
        } else {
            i++;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != index) {
            return index;
        }
        
    }
    
    return arr.length;
}
function swap(arr, first, second) {
    // console.log(arr, first, second)
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
console.log(missingNumber([0,1]));