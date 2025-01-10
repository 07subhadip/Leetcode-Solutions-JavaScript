/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const cnt = {};

    for (const b of words2) {
        const t = {};
        for (const char of b) {
            t[char] = (t[char] || 0) + 1;
        }
        for (const [char, freq] of Object.entries(t)) {
            cnt[char] = Math.max(cnt[char] || 0, freq);
        }
    }

    const ans = [];

    for (const a of words1) {
        const t = {};
        for (const char of a) {
            t[char] = (t[char] || 0) + 1;
        }
        if (Object.entries(cnt).every(([char, freq]) => (t[char] || 0) >= freq)) {
            ans.push(a);
        }
    }

    return ans;
};