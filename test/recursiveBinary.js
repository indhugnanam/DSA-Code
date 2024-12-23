function recursiveBinarySearch(traget) {
    let array = [-5, 2, 4, 6, 10];
    
    return search(array, traget, 0, array.length-1);
}

function search(array, traget, leftIndex, rightIndex) {

    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);

    if (array[middleIndex] == traget) {
        return middleIndex;
    }

    if (traget < array[middleIndex]) {
        return search(array, traget, leftIndex, middleIndex-1);
    } else {
        return search(array, traget, middleIndex+1, rightIndex);
    }
}

console.log(recursiveBinarySearch(10));
console.log(recursiveBinarySearch(6));
console.log(recursiveBinarySearch(20));

// Big-O = O(logn)