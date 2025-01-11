function pattern31(num) {
    let n = 2 * num;
    for (let row = 1; row < n; row++) {
        for (let col = 1; col < n; col++) {
            let val = Math.max(row, n-col, n-row, col)
            process.stdout.write(val-num+1+'');
        }
        console.log('');
    }
}

pattern31(4);

function pattern30(num) {

    for (let row = 1; row <= num; row++) {
        // let totalColsInRow = row > num ? 2 * num - row : row;
        for (let sapce = 0; sapce < num - row; sapce++) {
            process.stdout.write('  ');
        }

        for (let col = row; col > 0; col--) {
            process.stdout.write(col+' ');
        }
        for (let col = 2; col <= row; col++) {
            process.stdout.write(col+' ');
        }
        console.log(' ');
    }
}
// pattern30(5);

function pattern28(num) {

    for (let row = 1; row < 2 * num; row++) {
        let totalColsInRow = row > num ? 2 * num - row : row;

        for (let sapce = 0; sapce < num - totalColsInRow; sapce++) {
            process.stdout.write(' ');
        }

        for (let col = 0; col < totalColsInRow; col++) {
            process.stdout.write('* ');
        }

        console.log('');
    }

}

// pattern28(5);


function pattern17(num) {

    for (let row = 1; row <= 2*num; row++) {
        let totalColsInRow = row > num ? 2 * num - row : row;
        
        for (let sapce = 0; sapce < num - totalColsInRow; sapce++) {
            process.stdout.write(' ');
        }

        for (let col = totalColsInRow; col > 0; col--) {
            process.stdout.write(col+'');
        }
        for (let col = 2; col <= totalColsInRow; col++) {
            process.stdout.write(col+'');
        }

        console.log(' ');
    }
}
// pattern17(4);

function pattern5(num) {

    for (let row = 1; row < 2 * num; row++) {

        let totalColsInRow = row > num ? 2 * num - row : row;

        for (let col = 0; col < totalColsInRow; col++) {
            process.stdout.write('*');
        }

        console.log('');
    }
}

// pattern5(3);

