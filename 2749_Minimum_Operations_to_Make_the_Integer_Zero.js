/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = (num1, num2) => {
    for (let k = 1; ; ++k) {
        let x = num1 - k * num2;
        if (x < 0) {
            break;
        }
        if (x.toString(2).replace(/0/g, '').length <= k && k <= x) {
            return k;
        }
    }
    return -1;
};