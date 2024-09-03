/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let numStr = "";
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 96);
    }

    const sumDigits = (str) => {
        return str.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    let result = numStr;
    for (let i = 0; i < k; i++) {
        result = sumDigits(result).toString();
    }

    return parseInt(result);
};