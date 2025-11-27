/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
    let prefixSum = 0;
    let maxSum = -Infinity;
    const minPrefixSum = new Array(k).fill(Infinity);
    minPrefixSum[0] = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const rem = (i + 1) % k;

        if (minPrefixSum[rem] !== Infinity) {
            maxSum = Math.max(maxSum, prefixSum - minPrefixSum[rem]);
        }

        minPrefixSum[rem] = Math.min(minPrefixSum[rem], prefixSum);
    }

    return maxSum;
};