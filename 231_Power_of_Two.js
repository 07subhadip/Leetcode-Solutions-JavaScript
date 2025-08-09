/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let flag = true
    let power = 0
    while (flag) {
        let val = Math.pow(2, power)
        if (val == n) {
            return true
        } else if (val < n) {
            power++
        } else {
            return false
        }
    }
};