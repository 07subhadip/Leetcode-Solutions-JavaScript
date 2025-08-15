/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    let count = 0
    let flag = true

    while (flag) {
        let val = Math.pow(4, count)

        if (val == n) {
            return true
        } else if (val > n) {
            return false
        } else {
            count++
        }
    }
};