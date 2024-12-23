// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

function nextGreatestLetter(letters, target) {
   let start = 0; let end = letters.length-1;

    while (start <= end) {
    let mid = Math.floor(start + (end-start)/2);

        if (target < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start%letters.length];
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));