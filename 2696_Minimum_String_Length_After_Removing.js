/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = " ";
    for (let c of s) {
        if ((c === 'B' && stack[stack.length - 1] === 'A') || (c === 'D' && stack[stack.length - 1] === 'C')) {
            stack = stack.slice(0, -1);
        } else {
            stack += c;
        }
    }
    return stack.length - 1;
};