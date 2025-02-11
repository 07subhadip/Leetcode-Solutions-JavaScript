/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    const stack = [];
    const partLen = part.length;

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);

        if (stack.length >= partLen) {
            let match = true;
            for (let j = 0; j < partLen; j++) {
                if (stack[stack.length - partLen + j] !== part[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                for (let j = 0; j < partLen; j++) {
                    stack.pop();
                }
            }
        }
    }

    return stack.join('');
};