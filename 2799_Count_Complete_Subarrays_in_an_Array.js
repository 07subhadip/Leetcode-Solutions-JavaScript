/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    const n = nums.length
    const totalDistinct = new Set(nums).size

    let count = 0
    let left = 0
    const windowFreq = new Map()

    for (let right = 0; right < n; right++) {
        windowFreq.set(nums[right], (windowFreq.get(nums[right]) || 0) + 1)

        while (windowFreq.size === totalDistinct) {
            count += n - right

            const leftNum = nums[left]
            windowFreq.set(leftNum, windowFreq.get(leftNum) - 1)

            if (windowFreq.get(leftNum) === 0) {
                windowFreq.delete(leftNum)
            }
            left++
        }
    }

    return count
};