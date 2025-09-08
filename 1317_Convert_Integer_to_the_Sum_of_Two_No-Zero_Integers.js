/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let a = 1; ; ++a) {
        const b = n - a;
        if (!`${a}${b}`.includes('0')) {
            return [a, b];
        }
    }
}