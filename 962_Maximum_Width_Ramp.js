/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let n = nums.length;
    let stk = [];
    let ans = 0;

    for (let i = 0; i < n; ++i) {
        if (stk.length === 0 || nums[stk[stk.length - 1]] > nums[i]) {
            stk.push(i);
        }
    }

    for (let i = n - 1; i >= 0; --i) {
        while (stk.length > 0 && nums[stk[stk.length - 1]] <= nums[i]) {
            ans = Math.max(ans, i - stk[stk.length - 1]);
            stk.pop();
        }
        if (stk.length === 0) break;
    }

    return ans;
};