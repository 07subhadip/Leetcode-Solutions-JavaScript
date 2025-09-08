/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let min = nums[0]
    let max_diff = -1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            max_diff = Math.max(max_diff, nums[i] - min)
        } else {
            min = nums[i]
        }
    }

    return max_diff
};