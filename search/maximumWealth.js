// https://leetcode.com/problems/richest-customer-wealth/

function maximumWealth(accounts) {
    let max = Number.MIN_SAFE_INTEGER - 1;;

    for (let person=0; person<= accounts.length-1; person++) {
        let sum = 0;
        for (let account=0; account<= accounts[person].length-1; account++) {
            sum += accounts[person][account];
        }

        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));