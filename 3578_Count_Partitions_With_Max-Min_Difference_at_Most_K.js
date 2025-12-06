/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
    const mod = 1_000_000_007n;
    const n = nums.length;

    const dp = new BigInt64Array(n + 1).fill(0n);
    const prefixSum = new BigInt64Array(n + 1).fill(0n);

    dp[0] = 1n;
    prefixSum[0] = 1n;

    const minQ = [];
    const maxQ = [];

    let left = 0;

    for (let right = 0; right < n; right++) {
        const x = nums[right];

        while (minQ.length > 0 && nums[minQ[minQ.length - 1]] >= x) {
            minQ.pop();
        }
        minQ.push(right);

        while (maxQ.length > 0 && nums[maxQ[maxQ.length - 1]] <= x) {
            maxQ.pop();
        }
        maxQ.push(right);

        while (nums[maxQ[0]] - nums[minQ[0]] > k) {
            left++;
            if (minQ[0] < left) minQ.shift();
            if (maxQ[0] < left) maxQ.shift();
        }

        let currentWays = 0n;
        if (left === 0) {
            currentWays = prefixSum[right];
        } else {
            currentWays = (prefixSum[right] - prefixSum[left - 1] + mod) % mod;
        }

        dp[right + 1] = currentWays;
        prefixSum[right + 1] = (prefixSum[right] + currentWays) % mod;
    }

    return Number(dp[n]);
};