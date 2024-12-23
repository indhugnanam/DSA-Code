function evenStar(num) {

    for (let i=1; i<= num; i++) {
        for (let i=1; i<= num; i++) {
            process.stdout.write('*');
        }
        console.log('');
    }
}

evenStar(2);