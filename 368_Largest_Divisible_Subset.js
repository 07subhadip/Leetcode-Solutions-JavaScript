/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    if (nums.length === 0) return [];

    nums.sort((a, b) => a - b);

    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);
    let maxIndex = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    const res = [];

    while (maxIndex !== -1) {
        res.unshift(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return res;
};