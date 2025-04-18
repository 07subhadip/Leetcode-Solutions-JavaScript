/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let ans = 0;
    const n = nums.length;

    for (let j = 1; j < n; ++j) {
        for (let i = 0; i < j; ++i) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                ++ans;
            }
        }
    }
    return ans;
};