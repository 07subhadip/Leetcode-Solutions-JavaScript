/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stk = [];
    for (const c of s) {
        if (c === ')' && stk.length > 0 && stk.at(-1) === '(') {
        stk.pop();
        } else {
        stk.push(c);
        }
    }
    return stk.length;
};