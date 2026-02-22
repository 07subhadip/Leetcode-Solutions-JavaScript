/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let last = null;
    let ans = 0;

    for (let i = 0; i < 32; i++) {
        if ((n >> i) & 1) {
            if (last !== null) {
                ans = Math.max(ans, i - last);
            }
            last = i;
        }
    }

    return ans;
};
