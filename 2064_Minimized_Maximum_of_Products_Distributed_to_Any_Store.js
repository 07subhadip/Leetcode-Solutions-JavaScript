/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let left = 1;
    let right = 1e5;
    while (left < right) {
        const mid = (left + right) >> 1;
        let cnt = 0;
        for (const v of quantities) {
            cnt += Math.ceil(v / mid);
        }
        if (cnt <= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};