/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const arrBool = [];
    const prefixSum = [0];

    for (let word of words) {
        if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
            arrBool.push(1);
        } else {
            arrBool.push(0);
        }
        prefixSum.push(prefixSum[prefixSum.length - 1] + arrBool[arrBool.length - 1]);
    }

    const answer = [];
    for (let [li, ri] of queries) {
        answer.push(prefixSum[ri + 1] - prefixSum[li]);
    }

    return answer;
};