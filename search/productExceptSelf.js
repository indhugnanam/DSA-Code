function productExceptSelf(nums) {
    let ans = [1];

    let prefix = 1;
    for (let i=0; i<= nums.length-1; i++) {
        ans[i] = prefix;
        prefix = prefix * nums[i];
    }

    let postfix = 1;

    for (let i=nums.length-1; i>=0; i--) {
        ans[i] = ans[i] * postfix;
        postfix *= nums[i];
    }

    return ans;
}


console.log(productExceptSelf([1,2,3,4]));