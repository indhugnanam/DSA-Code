
function ascStar(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write('*');
        }
        console.log('');
    }
}
ascStar(5);

// function descStar(num) {
//     for (let i = 0; i < num; i++) {
//         for (let j = num-i; j > 0; j--) {
//             process.stdout.write('*');
//         }
//         console.log('');
//     }
// }
// descStar(5);



// function ascNum(num) {

//     for (let i=1; i <=num; i++) {
//         for (let j=1; j <= i; j++) {
//             process.stdout.write(j+'');
//         }
//         console.log('');
//     }
// }

// ascNum(5);
