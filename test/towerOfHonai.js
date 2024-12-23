function towerOfHonai(n, fromRod, toRod, usingRod) {
    if(n === 1) {
        console.log(`Move disk 1 from to ${fromRod} to ${toRod}`);
        return;
    }

    towerOfHonai(n-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from to ${fromRod} to ${toRod}`);
    towerOfHonai(n-1, usingRod, toRod, fromRod);

}

console.log(towerOfHonai(2, 'A', 'C', 'B'));

// Big-O = O(2^n)