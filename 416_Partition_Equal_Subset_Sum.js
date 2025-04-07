// Solution 1
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const total = nums.reduce((acc, curr) => acc + curr);
    if (total % 2) return false;
    const target = total / 2;

    let sumFlag = 1n;

    for (const num of nums)
        sumFlag = sumFlag | (sumFlag << BigInt(num));

    return (sumFlag >> BigInt(target)) & 1n;
};


// Solution 2 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[target];
};
