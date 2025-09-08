/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) {
        return false;
    }
    const cnt = new Array(26).fill(0); 
    for (const c of s) {
        cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let x = 0;
    for (const v of cnt) {
        x += v & 1; 
    }
    return x <= k;
};