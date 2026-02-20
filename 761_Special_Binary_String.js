/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    if (!s) return "";
    const list = [];
    let count = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            list.push('1' + makeLargestSpecial(s.substring(left + 1, i)) + '0');
            left = i + 1;
        }
    }
    list.sort((a, b) => b.localeCompare(a));
    return list.join('');
};
