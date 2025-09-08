/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const powers = [];
    while (n > 0) {
        const x = n & -n;
        powers.push(x);
        n -= x;
    }
    const mod = 1_000_000_007;
    const ans = [];
    for (const [l, r] of queries) {
        let x = 1;
        for (let j = l; j <= r; j++) {
            x = (x * powers[j]) % mod;
        }
        ans.push(x);
    }
    return ans;
};