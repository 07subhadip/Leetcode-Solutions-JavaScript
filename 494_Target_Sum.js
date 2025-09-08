/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = new Map();

    const dfs = (i, currentSum) => {
        if (i === nums.length) {
            return currentSum === target ? 1 : 0;
        }

        const key = `${i},${currentSum}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const add = dfs(i + 1, currentSum + nums[i]);
        const subtract = dfs(i + 1, currentSum - nums[i]);

        memo.set(key, add + subtract);
        return add + subtract;
    };

    return dfs(0, 0);
};