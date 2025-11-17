/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let spaces = k

    for (let n of nums) {
        if (n === 1) {
            if (spaces < k) {
                return false
            } else {
                spaces = 0
            }
        } else {
            spaces++
        }
    }

    return true
};