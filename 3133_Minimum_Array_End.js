/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    n--;
    let ans = BigInt(x);
    for (let i = 0; i < 31; ++i) {
        if (((x >> i) & 1) ^ 1) {
            ans |= BigInt(n & 1) << BigInt(i);
            n >>= 1;
        }
    }
    ans |= BigInt(n) << BigInt(31);
    return Number(ans);
};