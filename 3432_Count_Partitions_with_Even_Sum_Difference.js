/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    const total = nums.reduce((acc, val) => acc + val, 0);
    return total % 2 === 0 ? nums.length - 1 : 0;
};