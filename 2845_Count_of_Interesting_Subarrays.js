/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
    const countMap = new Map();
    countMap.set(0, 1);
    let prefix = 0;
    let result = 0;

    for (const num of nums) {
        if (num % modulo === k) {
            prefix = (prefix + 1) % modulo;
        }

        const target = (prefix - k + modulo) % modulo;
        result += countMap.get(target) || 0;

        countMap.set(prefix, (countMap.get(prefix) || 0) + 1);
    }

    return result;
};