/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxVowel = 0, maxConsonant = 0;

    for (let [ch, count] of Object.entries(freq)) {
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
};