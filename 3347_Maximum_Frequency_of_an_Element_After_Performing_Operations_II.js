/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
    let ans = 1;
    let adjustable = 0;

    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const line = new Map();
    const candidates = new Set();

    for (const num of nums) {
        line.set(num - k, (line.get(num - k) || 0) + 1);
        line.set(num + k + 1, (line.get(num + k + 1) || 0) - 1);
        candidates.add(num);
        candidates.add(num - k);
        candidates.add(num + k + 1);
    }

    const sortedCandidates = Array.from(candidates).sort((a, b) => a - b);

    for (const num of sortedCandidates) {
        adjustable += line.get(num) || 0;
        const adjusted = adjustable - (count.get(num) || 0);
        ans = Math.max(ans, (count.get(num) || 0) + Math.min(numOperations, adjusted));
    }

    return ans;
};