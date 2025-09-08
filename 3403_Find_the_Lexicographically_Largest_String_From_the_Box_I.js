/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
    if (numFriends === 1) {
        return word;
    }

    const n = word.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        const maxLengthForCurrentSubstring = Math.min(n - i, n - numFriends + 1);
        const currentSubstring = word.substring(i, i + maxLengthForCurrentSubstring);

        if (currentSubstring > result) {
            result = currentSubstring;
        }
    }

    return result;
};