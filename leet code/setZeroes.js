function setZeroes(matrix) {

    let arr = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == 0) {
                arr.push([row, col]);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            for (let rr = 0; rr < arr.length; rr++) {
                matrix[arr[rr][0]][col] = 0;
                matrix[row][arr[rr][1]] = 0;
            }
        }
    }
  
    return matrix;
}

console.log(setZeroes([[0,1]]));
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));