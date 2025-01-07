// find the maximum item in the remaining array and swap with correct index
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let last = arr.length-i-1;
        let maxIndex = getMaxIndex(arr, 0, last)
        swap(arr, maxIndex, last)
    }
    return arr;
}

function getMaxIndex(arr, start, end) {
    let max = start;

    for (let i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }

    return max;
}

function swap(arr, first, second) {
    console.log(arr, first, second)
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(selectionSort([2,0,2,1,1,0]));