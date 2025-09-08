/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (words, groups) {
    const n = words.length
    const dp = new Array(n).fill(1)
    const prev = new Array(n).fill(-1)

    const hammingDistance = (a, b) => {
        let dist = 0

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) dist++
        }

        return dist
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (
                groups[i] !== groups[j] &&
                words[i].length === words[j].length &&
                hammingDistance(words[i], words[j]) === 1
            ) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    prev[i] = j
                }
            }
        }
    }

    let maxIndex = 0

    for (let i = 1; i < n; i++) {
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i
        }
    }

    const result = []
    let index = maxIndex

    while (index !== -1) {
        result.push(words[index])
        index = prev[index]
    }

    return result.reverse()
};