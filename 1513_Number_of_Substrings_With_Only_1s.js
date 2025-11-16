/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    const MOD = 1e9 + 7;
    let total = 0;
    let count = 0;

    for (const c of s) {
        if (c === '1') {
            count++;
        } else {
            total = (total + count * (count + 1) / 2) % MOD;
            count = 0;
        }
    }
    total = (total + count * (count + 1) / 2) % MOD;

    return total;
};