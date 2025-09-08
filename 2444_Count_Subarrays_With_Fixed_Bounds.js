/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let count = 0;
    let lastMinK = -1;
    let lastMaxK = -1;
    let lastInvalid = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            lastInvalid = i;
        }
        if (nums[i] === minK) {
            lastMinK = i;
        }
        if (nums[i] === maxK) {
            lastMaxK = i;
        }
        count += Math.max(0, Math.min(lastMinK, lastMaxK) - lastInvalid);
    }

    return count;
};