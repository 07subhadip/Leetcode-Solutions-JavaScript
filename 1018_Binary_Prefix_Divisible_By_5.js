/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let ans = [];
    let cur = 0;

    for (let n of nums) {
        cur = (cur * 2 + n) % 5;
        if (cur === 0) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};