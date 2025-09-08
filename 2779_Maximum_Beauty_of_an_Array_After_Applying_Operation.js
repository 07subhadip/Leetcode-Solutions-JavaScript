/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    const m = Math.max(...nums) + k * 2 + 2;
    const d = Array(m).fill(0);
    for (const x of nums) {
        d[x]++;
        d[x + k * 2 + 1]--;
    }
    let ans = 0;
    let s = 0;
    for (const x of d) {
        s += x;
        ans = Math.max(ans, s);
    }
    return ans;
};