/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let tmp = start ^ goal;
    let ans = 0;
    while (tmp !== 0) {
        ans += tmp & 1;
        tmp >>= 1;
    }
    return ans;
};