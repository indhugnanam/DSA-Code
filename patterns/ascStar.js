// function ascStar(num) {
//     let star = '';

//     for (let i=0; i<= num-1; i++) {
//         star = star + '*';
//         console.log(star);
//     }
// }

// ascStar(5);

// function desStar(num) {

//     for (let i=num; i >= 0; i--) {
//         console.log('*'.repeat(i));
//     }
// }

// desStar(5);


function ascNum(num) {

    for (let i=1; i <=num; i++) {
        for (let j=1; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        console.log('');
    }
}

ascNum(5);
