/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
    const freq = new Array(26).fill(0);
    for (const ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }
    const nums = freq.filter(x => x > 0);

    function calc(v) {
        let del = 0;
        for (const x of nums) {
            if (x < v) del += x;
            else if (x > v + k) del += x - v - k;
        }
        return del;
    }

    let ans = word.length;
    for (let v = 0; v <= word.length; v++) {
        ans = Math.min(ans, calc(v));
    }
    return ans;
};