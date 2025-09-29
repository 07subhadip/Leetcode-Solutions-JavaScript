/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    while (nums.length > 1) {
        const m = nums.length - 1
        const next = new Array(m)
        for (let i = 0; i < m; i++) {
            next[i] = (nums[i] + nums[i + 1]) % 10
        }
        nums = next
    }
    return nums[0]
};