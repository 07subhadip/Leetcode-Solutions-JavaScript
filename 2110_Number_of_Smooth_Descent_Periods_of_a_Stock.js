/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
    const n = prices.length;
    let res = 1;
    let prev = 1;

    for (let i = 1; i < n; ++i) {
        if (prices[i] === prices[i - 1] - 1) {
            ++prev;
        } else {
            prev = 1;
        }
        res += prev;
    }
    return res;
};