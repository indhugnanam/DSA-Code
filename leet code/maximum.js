// function maximum(logs) {
//     for ( let i = 0; i <= logs.length-1; i++) {
//         for ( let j = 0; j <= logs[i].length-1; j++) {
//            console.log(i, j)
     
//             if (logs[i][j])
//         }
//    }
// }

// console.log(maximum([[1950,1961],[1960,1971],[1970,1981]]));

function maximum(nums) {
    let ans = [nums[0]];

    let count = 0;

    for (let i = 0; i<=nums.length-1; i++) {
        if (ans[ans.length-1] != nums[i]) {
            ans.push(nums[i]);
        } else {
            count++;
        }
    }
    console.log(count);
   
    while(count > 1) {
        ans.push('_');
        count--;
    }

    return ans;
  
}

console.log(maximum([1,1,2]));