/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const seen = new Set()

    for (const num of nums) {
        if (num > 0) {
            seen.add(num)
        }
    }

    let i = 1

    while (seen.has(i)) {
        i++
    }

    return i
};