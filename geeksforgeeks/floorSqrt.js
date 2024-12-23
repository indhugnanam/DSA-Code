function floorSqrt(n) {

    let start = 0;
    let end = n;
 
    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);

        if (mid**2 > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return end;
   
}

console.log(floorSqrt(50));