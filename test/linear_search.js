function linearSearch(n) {
    let array = [-5, 2, 10, 4, 6];

    for ( let i=0; i<= array.length; i++) {
        if (array[i] == n) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(10));
console.log(linearSearch(6));
console.log(linearSearch(20));
// Big-O - O(n)
