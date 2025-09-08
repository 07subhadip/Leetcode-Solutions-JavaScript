/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
    let f0 = 0, f1 = -Infinity;
    for (const x of nums) {
        let tempF0 = Math.max(f0 + x, f1 + (x ^ k))
        let tempF1 = Math.max(f1 + x, f0 + (x ^ k))
        f0 = tempF0
        f1 = tempF1
    }
    return f0
};