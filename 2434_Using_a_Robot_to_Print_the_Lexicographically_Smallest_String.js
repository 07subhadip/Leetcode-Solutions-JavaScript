/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        count[s.charCodeAt(i) - 97]++;
    }

    const stack = [];
    let result = '';
    let minCharCode = 0;

    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        count[c]--;

        while (minCharCode < 26 && count[minCharCode] === 0) {
            minCharCode++;
        }

        stack.push(String.fromCharCode(c + 97));

        while (
            stack.length &&
            (stack[stack.length - 1].charCodeAt(0) - 97) <= minCharCode
        ) {
            result += stack.pop();
        }
    }

    while (stack.length) {
        result += stack.pop();
    }

    return result;
};