/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    const originalCount = nums.filter(num => num === k).length;
    const uniqueX = new Set();
    for (const num of nums) {
        uniqueX.add(k - num);
    }

    let maxDelta = -Infinity;

    for (const x of uniqueX) {
        let current = 0;
        let maxSub = -Infinity;
        for (const num of nums) {
            const val = (num === (k - x) ? 1 : 0) - (num === k ? 1 : 0);
            current = Math.max(val, current + val);
            maxSub = Math.max(maxSub, current);
        }
        if (maxSub > maxDelta) {
            maxDelta = maxSub;
        }
    }

    return originalCount + maxDelta;
};