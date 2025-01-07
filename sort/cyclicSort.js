function cyclicSort(arr) {
    let i = 0;

    while(i < arr.length) {
        let correct = arr[i] - 1;

        if (arr[i] != arr[correct]) {
            swap(arr, i, correct);
        } else {
            i++;
        }
        console.log(arr[i], arr[correct])
    }
    return arr;
}
function swap(arr, first, second) {
    console.log(arr, first, second)
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

console.log(cyclicSort([3, 5, 2, 1, 4]));