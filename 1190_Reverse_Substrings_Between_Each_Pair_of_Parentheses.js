/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ')') {
            let temp = '';
            while (stack[stack.length - 1] !== '(') {
                temp += stack.pop();
            }
            stack.pop();
            for (let c of temp) {
                stack.push(c);
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};