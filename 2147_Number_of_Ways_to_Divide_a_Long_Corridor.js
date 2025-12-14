/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function (corridor) {
    const n = corridor.length;
    const mod = 10 ** 9 + 7;
    const f = Array.from({ length: n }, () => Array(3).fill(-1));
    const dfs = (i, k) => {
        if (i >= n) {
            return k === 2 ? 1 : 0;
        }
        if (f[i][k] !== -1) {
            return f[i][k];
        }
        if (corridor[i] === 'S') {
            ++k;
        }
        if (k > 2) {
            return (f[i][k] = 0);
        }
        f[i][k] = dfs(i + 1, k);
        if (k === 2) {
            f[i][k] = (f[i][k] + dfs(i + 1, 0)) % mod;
        }
        return f[i][k];
    };
    return dfs(0, 0);
};