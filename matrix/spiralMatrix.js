function spiralMatrix(matrix) {

    let top = 0; let left = 0; let right = matrix[0].length-1; let bottom  = matrix.length-1;
    console.log(top, left, right, bottom);

    let spiral = [];

    while (top <= bottom && left <= right) {

        if (left <= right) {
            for (let i=left; i <= right; i++) {
                // console.log(top, i, matrix[top][i]);
                spiral.push(matrix[top][i]);
            }
            top++;
        }
      
        if (top <= bottom) {

            for (let i=top; i <= bottom; i++) {
                // console.log(i, right);
                spiral.push(matrix[i][right]);
            }
            right--;
        }

        if (left <= right && top <= bottom) {

            for (let i=right; i >= left; i--) {
                // console.log(bottom, i);
                spiral.push(matrix[bottom][i]);
            }

            bottom--;
  
            for (let i=bottom; i >= top; i--) {
                // console.log(left, i, matrix[i][left]);
                spiral.push(matrix[i][left]);
            }
            left++;
        }
    }
    return spiral;
}

console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]));

// console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));

// console.log(spiralMatrix([[6,9,7]]));
// console.log(spiralMatrix([[2,3]]));

// console.log(spiralMatrix([[2,5],[8,4],[0,-1]]));
// console.log(spiralMatrix([[7],[9],[6]]));
// console.log(spiralMatrix([[3],[2]]));

// console.log(spiralMatrix([[1,2],[3,4]]));
// console.log(spiralMatrix([[2,5,8],[4,0,-1]]));

// console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

