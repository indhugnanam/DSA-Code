function countSmaller(nums) {
    let count = 0;
    let arr = [];
    while (count < nums.length) {

        let smaller = 0;
        for (let i=count+1; i<= nums.length-1; i++) {
           if (nums[i] < nums[count]) {
                smaller++;
           }
        }
        arr[count] = smaller;
        count++
    }
    return arr;
}

console.log(countSmaller([5,2,6,1]))