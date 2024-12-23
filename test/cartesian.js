function cartesian(l1, l2) {
    let temp = [];

    for (let i=0; i<l1.length; i++) {
        for (let j=0; j<l2.length; j++) {
            temp.push([l1[i], l2[j]]);
        }
    }
    return temp;
}

const A = [1,2];
const B = [3,4, 5];

console.log(cartesian(A, B));

// Big - O = O(mn)