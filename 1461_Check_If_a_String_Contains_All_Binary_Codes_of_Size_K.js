/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    const n = s.length;
    const m = 1 << k;

    if (n - k + 1 < m) {
        return false;
    }

    const ss = new Set();
    
    for (let i = 0; i + k <= n; ++i) {
        ss.add(s.slice(i, i + k));
    }
    
    return ss.size === m;
};
