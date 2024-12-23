function search2DMatrix(matrix, target) {

    let r = 0; let c = matrix.length-1;

    while (r < matrix.length && c >= 0) {
        if (matrix[r][c] == target) {
            return [r, c];
        }

        if (matrix[r][c] < target) {
            r++;
        } else {
            c--;
        }
    }
    return [-1, -1];

}

let matrix = [[10, 20, 30, 40], [15, 25, 35, 45], [28, 29, 37, 49], [33, 34, 38, 50]];
console.log(search2DMatrix(matrix, 10));