/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let max = Math.abs(nums[0] - nums[nums.length - 1])

    for (let i = 0; i < nums.length - 1; i++) {
        let diff = Math.abs(nums[i] - nums[i + 1])
        max = Math.max(max, diff)
    }

    return max
};