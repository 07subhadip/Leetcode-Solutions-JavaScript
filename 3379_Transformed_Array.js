/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
    const n = nums.length;
    const ans = [];
    for (let i = 0; i < n; ++i) {
        ans.push(nums[(i + (nums[i] % n) + n) % n]);
    }
    return ans;
};