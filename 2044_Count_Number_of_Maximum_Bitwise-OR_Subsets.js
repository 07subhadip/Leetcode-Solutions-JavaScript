/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    let n = nums.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        max |= nums[i];
    }
    let ans = 0;
    function dfs(pre, depth) {
        if (depth === n) {
            if (pre === max) ++ans;
            return;
        }
        dfs(pre, depth + 1);
        dfs(pre | nums[depth], depth + 1);
    }
    dfs(0, 0);
    return ans;
};