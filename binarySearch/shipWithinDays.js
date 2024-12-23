// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/submissions/1373784403/
function shipWithinDays(weights, days) {

    let start = 0; let end = 0;

    for (let i=0; i<= weights.length-1; i++) {
        start = Math.max(start, weights[i]);
        end += weights[i];
    }

    while (start <= end) {
        let mid = Math.floor(start + ( end-start)/2);
        let sum = 0;
        let day = 1;

        for (let i=0; i<= weights.length-1; i++) {
            if (sum+weights[i] > mid) {
                sum = weights[i];
                day++;
            } else {
                sum += weights[i];
            }
        }

        if (day < days) {
            end = mid - 1;
        } else {
            start = mid + 1;
        } 
    }
    return start;

}

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5));
console.log(shipWithinDays([3,2,2,4,1,4], 3));
console.log(shipWithinDays([1,2,3,1,1], 4));
