/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
    const f = Array.from({ length: 200 }, () => Array(200).fill(-1));
    const dfs = (i, j) => {
        if (i <= 0 && j <= 0) return 0.5;
        if (i <= 0) return 1;
        if (j <= 0) return 0;
        if (f[i][j] !== -1) return f[i][j];
        f[i][j] = 0.25 * (
            dfs(i - 4, j) +
            dfs(i - 3, j - 1) +
            dfs(i - 2, j - 2) +
            dfs(i - 1, j - 3)
        );
        return f[i][j];
    };
    return n >= 4800 ? 1 : dfs(Math.ceil(n / 25), Math.ceil(n / 25));
};