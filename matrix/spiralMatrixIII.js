function spiralMatrixIII(rows, cols, rStart, cStart) {

    let matrix = [];
    let direction = [[0, 1],[1, 0],[0, -1],[-1, 0]];
    let moves = 0; dir = 0;
    matrix.push([rStart, cStart]);


    while (matrix.length < rows*cols) {
        if (dir%2 === 0) {
            moves++;
        }
      
        for (let i=0; i< moves; i++) {
            rStart+=direction[dir][0];
            cStart+=direction[dir][1];

            if (rStart >=0 && rStart < rows && cStart >= 0 && cStart < cols) {
                matrix.push([rStart, cStart]);
            }
        }

        dir = (dir+1)%4;
        // console.log(moves);
        // break;
    }

    return matrix;


}

console.log(spiralMatrixIII(rows = 5, cols = 6, rStart = 1, cStart = 4));