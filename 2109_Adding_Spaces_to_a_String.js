/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const ans = [];
    for (let i = 0, j = 0; i < s.length; i++) {
        if (i === spaces[j]) {
            ans.push(' ');
            j++;
        }
        ans.push(s[i]);
    }
    return ans.join('');
};