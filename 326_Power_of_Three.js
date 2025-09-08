/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let flag = true
    let count = 0

    while (flag) {
        let val = Math.pow(3, count)
        if (val == n) {
            return true
        } else if (val > n) {
            return false
        } else {
            count++
        }
    }
};