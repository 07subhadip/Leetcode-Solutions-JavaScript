/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    const n = nums.length;
    const totalPairs = (n * (n - 1)) / 2;

    const freqMap = new Map();

    for (let i = 0; i < n; i++) {
        const key = nums[i] - i;
        freqMap.set(key, (freqMap.get(key) || 0) + 1);
    }

    let goodPairs = 0;
    for (const count of freqMap.values()) {
        goodPairs += (count * (count - 1)) / 2;
    }

    return totalPairs - goodPairs;
};