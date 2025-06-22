/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let result = [];
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        if (group.length < k) {
            group += fill.repeat(k - group.length);
        }
        result.push(group);
    }
    return result;
};