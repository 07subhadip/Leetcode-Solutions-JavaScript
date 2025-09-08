/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
    const n = words.length

    if (n === 0) {
        return []
    }

    const resultSubsequence = [words[0]]

    let lastAddedGroup = groups[0]

    for (let i = 1; i < n; i++) {
        if (groups[i] !== lastAddedGroup) {
            resultSubsequence.push(words[i])
            lastAddedGroup = groups[i]
        }
    }

    return resultSubsequence
};