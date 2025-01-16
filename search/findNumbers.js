function findNumbers(num) {
    let count = 0 

    for (let i=0; i<=num.length-1; i++) {
        let len = Array.from(num[i].toString());
        if (len.length%2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(findNumbers([555,901,482,1771]));
