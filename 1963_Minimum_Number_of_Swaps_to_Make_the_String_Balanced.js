/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let x = 0;
    for (const c of s) {
        if (c === '[') {
            ++x;
        } else if (x) {
            --x;
        }
    }
    return (x + 1) >> 1;
};