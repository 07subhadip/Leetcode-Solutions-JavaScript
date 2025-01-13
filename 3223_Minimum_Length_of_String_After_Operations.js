/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const cnt = new Map();
    for (const c of s) {
        cnt.set(c, (cnt.get(c) || 0) + 1);
    }
    let ans = 0;
    for (const x of cnt.values()) {
        ans += x & 1 ? 1 : 2;
    }
    return ans;
};