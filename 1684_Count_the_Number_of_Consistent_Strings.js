/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set([...allowed]);
    const n = words.length;
    let ans = n;
    for (const word of words) {
        for (const c of word) {
            if (!set.has(c)) {
                ans--;
                break;
            }
        }
    }
    return ans;
};