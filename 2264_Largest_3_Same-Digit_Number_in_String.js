/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let max = "";
    for (let i = 0; i <= num.length - 3; i++) {
        const c = num[i];
        if (c === num[i + 1] && c === num[i + 2] && c > max) max = c;
    }
    return max === "" ? "" : max.repeat(3);
};