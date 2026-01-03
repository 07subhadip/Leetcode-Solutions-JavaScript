/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
    const mod = 10 ** 9 + 7;
    let f0 = 6;
    let f1 = 6;

    for (let i = 1; i < n; i++) {
        const g0 = (3 * f0 + 2 * f1) % mod;
        const g1 = (2 * f0 + 2 * f1) % mod;
        f0 = g0;
        f1 = g1;
    }

    return (f0 + f1) % mod;
};