/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    const hashtable = {}
    let count = 0

    for (const word of words) {
        const reversed = word[1] + word[0]

        if (hashtable[reversed] > 0) {
            count += 4
            hashtable[reversed]--
        } else {
            hashtable[word] = (hashtable[word] || 0) + 1
        }
    }

    for (const word of words) {
        if (word[0] == word[1] && hashtable[word] > 0) {
            count += 2
            break
        }
    }

    return count
};