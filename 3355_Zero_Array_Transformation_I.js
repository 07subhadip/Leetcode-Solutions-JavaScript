/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
    const line = new Array(nums.length + 1).fill(0);
    let decrement = 0;

    for (const [l, r] of queries) {
        line[l]++;
        line[r + 1]--;
    }

    for (let i = 0; i < nums.length; i++) {
        decrement += line[i];
        if (decrement < nums[i]) return false;
    }

    return true;
};