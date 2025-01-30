/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (divisor === 0) {
        return Infinity;
    }
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let quotient = 0;
    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;
        while (dvd >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }
        dvd -= temp;
        quotient += multiple;
    }
    const result = sign * quotient;
    return Math.max(-2147483648, Math.min(2147483647, result));
};