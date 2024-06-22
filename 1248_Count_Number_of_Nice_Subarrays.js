/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let prefixSum = 0;
    let count = 0;
    let prefixSumCounts = new Map();
    prefixSumCounts.set(0, 1);
    for (let num of nums) {
        prefixSum += num % 2;
        if (prefixSumCounts.has(prefixSum - k)) {
            count += prefixSumCounts.get(prefixSum - k);
        }
        if (prefixSumCounts.has(prefixSum)) {
            prefixSumCounts.set(prefixSum, prefixSumCounts.get(prefixSum) + 1);
        } else {
            prefixSumCounts.set(prefixSum, 1);
        }
    }
    return count;
};