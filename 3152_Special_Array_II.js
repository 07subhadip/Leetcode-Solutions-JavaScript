/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    const n = nums.length;
    const d = Array.from({ length: n }, (_, i) => i);
    for (let i = 1; i < n; ++i) {
        if (nums[i] % 2 !== nums[i - 1] % 2) {
            d[i] = d[i - 1];
        }
    }
    return queries.map(([from, to]) => d[to] <= from);
};