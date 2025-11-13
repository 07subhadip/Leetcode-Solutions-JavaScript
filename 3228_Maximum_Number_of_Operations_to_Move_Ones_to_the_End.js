/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function (s) {
    let ones = 0;
    let ops = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            ones++;
        } else {
            if (i + 1 === n || s[i + 1] === '1') {
                ops += ones;
            }
        }
    }

    return ops;
};