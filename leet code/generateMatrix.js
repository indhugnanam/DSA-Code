function spiralMatrixII(n) {
    let matrix = [];
    let top = 0; let left = 0; let right = n-1; let bottom = n-1;
    let count = 1;

    for (let i=0; i< n; i++) {
        matrix[i] = [];
    }

    while (top <= bottom) {

        for (let c=left; c <= right; c++) {
            matrix[top][c] = count++;
        }
        top++;

        for (let c=top; c <= bottom; c++) {
            matrix[c][right] = count++;
        }
        right--;

        for (let c=right; c >= left; c--) {
            matrix[bottom][c] = count++;
        }
        bottom--;

        for (let c=bottom; c >= top; c--) {
            matrix[c][left] = count++;
        }
        left++;
    }


   return matrix;
}

console.log(spiralMatrixII(3));