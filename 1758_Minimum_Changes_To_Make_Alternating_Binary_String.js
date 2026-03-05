/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let start0 = 0;
    let start1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] == '0') {
                start1 += 1;
            } else {
                start0 += 1;
            }
        } else {
            if (s[i] == '1') {
                start1 += 1;
            } else {
                start0 += 1;
            }
        }
    }

    return Math.min(start0, start1);
};
