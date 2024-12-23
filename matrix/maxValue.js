// https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/

function maxValue(n, index, maxSum) {
    let start = 0;
    let end = maxSum;
    let nums = [];

    while (start <= end) {
        nums = [];
        let sum = 0;
        let count = index;
        let mid = Math.floor(start + (end - start)/2);
        let ass = mid;
        let check = 2;

        for (let i=0; i<=n-1; i++) {
            // console.log(i, count, mid, ass)
            nums[count] = ass;
            sum += nums[count];
            if (count+1 < n) {
                count++
            } else {
                count=0;
            }
            // if (check == 1) {
            //     ass = mid > 0 ? mid - 1 : 0;
            // }
            // check--;
           
        }
        console.log(start,mid, end, sum, ass)
        
        if (sum < maxSum) {
            start = mid + 1;
        } else if (sum > maxSum) {
            end = mid - 1;
        } else {
            return mid;
        }


    }
    console.log(nums)
    return start;
    
};

// console.log(maxValue(4, 2, 6))
// console.log(maxValue(6, 1, 10))
console.log(maxValue(8, 7, 14))
