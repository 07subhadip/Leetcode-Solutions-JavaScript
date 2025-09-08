/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let maxEndingHere = 0, maxSoFar = 0;
    let minEndingHere = 0, minSoFar = 0;

    for (let i = 0; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);

        minEndingHere = Math.min(nums[i], minEndingHere + nums[i]);
        minSoFar = Math.min(minSoFar, minEndingHere);
    }

    return Math.max(maxSoFar, -minSoFar);
};