/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const res = new Set();
    const left = new Set();

    const right = new Map();
    for (const ch of s) {
        right.set(ch, (right.get(ch) || 0) + 1);
    }

    for (const m of s) {
        right.set(m, right.get(m) - 1);

        for (const c of left) {
            if ((right.get(c) || 0) > 0) {
                res.add(m + ',' + c);
            }
        }

        left.add(m);
    }

    return res.size;
};