var minEatingSpeed = function(piles, h) {

    let start = 0;
    let end = 0;

    for (let i=0; i<= piles.length-1; i++) {
        start = Math.min(start, piles[i]);
        // end = Math.max(end, piles[i]);
        end += piles[i];
    }
    
    console.log(start, end);
    return search(piles, h, start, end)
};

function search(piles, h, start, end) {
    

    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);

        let count = 0;
        for (let i=0; i<= piles.length-1; i++) {
           count += Math.ceil(piles[i] / mid);
        }

        if (count > h) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;

}

console.log(minEatingSpeed([30,11,23,4,20], 6));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([312884470], 312884469))
