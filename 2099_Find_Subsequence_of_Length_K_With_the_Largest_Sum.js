/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    const n = nums.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    idx.sort((i, j) => nums[i] - nums[j]);
    return idx
        .slice(n - k)
        .sort((i, j) => i - j)
        .map(i => nums[i]);
};