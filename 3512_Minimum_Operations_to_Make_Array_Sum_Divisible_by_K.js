/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    return nums.reduce((a, b) => a + b) % k
};