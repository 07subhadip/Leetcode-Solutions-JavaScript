/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    const n = nums.length
    const resultSet = new Set()

    for (let i = 0; i < n; i++) {
        if (nums[i] === key) {
            let start = Math.max(0, i - k)
            let end = Math.min(n - 1, i + k)
            for (let j = start; j <= end; j++) {
                resultSet.add(j)
            }
        }
    }

    return [...resultSet].sort((a, b) => a - b)
};