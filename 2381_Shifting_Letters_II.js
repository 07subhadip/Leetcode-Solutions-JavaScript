/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const d = new Array(n + 1).fill(0);

    for (let [i, j, v] of shifts) {
        if (v === 0) {
            v--;
        }
        d[i] += v;
        d[j + 1] -= v;
    }

    for (let i = 1; i <= n; ++i) {
        d[i] += d[i - 1];
    }

    let ans = '';
    for (let i = 0; i < n; ++i) {
        const j = (s.charCodeAt(i) - 'a'.charCodeAt(0) + (d[i] % 26) + 26) % 26;
        ans += String.fromCharCode('a'.charCodeAt(0) + j);
    }

    return ans;
};