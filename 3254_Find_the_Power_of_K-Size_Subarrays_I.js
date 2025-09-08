/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    const n = nums.length;
    const f = Array(n).fill(1);
    for (let i = 1; i < n; ++i) {
        if (nums[i] === nums[i - 1] + 1) {
            f[i] = f[i - 1] + 1;
        }
    }
    const ans = [];
    for (let i = k - 1; i < n; ++i) {
        ans.push(f[i] >= k ? nums[i] : -1);
    }
    return ans;
};