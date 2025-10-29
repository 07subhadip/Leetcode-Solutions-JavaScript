/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let k = 1;
    while (true) {
        let candidate = (1 << k) - 1;
        if (candidate >= n) {
            return candidate;
        }
        k++;
    }
};