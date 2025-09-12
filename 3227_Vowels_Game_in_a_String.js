/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
    const vowels = 'aeiou';
    for (const c of s) {
        if (vowels.includes(c)) {
            return true;
        }
    }
    return false;
};