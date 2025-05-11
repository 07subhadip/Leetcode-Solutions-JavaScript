/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    for (let i = 0; i <= arr.length - 3; i++) {
        if ((arr[i] & 1) && (arr[i + 1] & 1) && (arr[i + 2] & 1)) {
            return true
        }
    }
    return false
};