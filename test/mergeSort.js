function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    let tempArray = [];

    while(leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            tempArray.push(leftArray.shift());
        } else {
            tempArray.push(rightArray.shift());
        }
    }

    return [...tempArray, ...leftArray, ...rightArray];
    
}

const arr = [8, 20, -2, 4, -6]; // [ -6, -2, 4, 8, 20 ] 
console.log(mergeSort(arr));

// Big - O = O(nlogn)