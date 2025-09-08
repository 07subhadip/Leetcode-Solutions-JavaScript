/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    for (let num of nums) {
        if (num < k) return -1;
    }

    let distinctGreaterThanK = new Set();

    for (let num of nums) {
        if (num > k) distinctGreaterThanK.add(num);
    }

    return distinctGreaterThanK.size;
};