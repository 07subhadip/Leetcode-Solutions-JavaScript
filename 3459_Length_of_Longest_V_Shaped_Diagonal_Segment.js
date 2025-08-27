/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function (grid) {
    if (!grid || grid.length === 0) return 0;
    const m = grid.length;
    const n = grid[0].length;
    const dirs = [1, 1, -1, -1, 1];

    const total = m * n * 4 * 2;
    const memo = new Int32Array(total);
    memo.fill(-1);

    const getIdx = (i, j, k, cnt) => ((((i * n + j) * 4 + k) << 1) | cnt);

    function dfs(i, j, k, cnt) {
        const idx = getIdx(i, j, k, cnt);
        const cached = memo[idx];
        if (cached !== -1) return cached;

        const x = i + dirs[k];
        const y = j + dirs[k + 1];

        const target = (grid[i][j] === 1) ? 2 : (2 - grid[i][j]);

        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== target) {
            memo[idx] = 0;
            return 0;
        }

        let res = dfs(x, y, k, cnt);
        if (cnt > 0) {
            res = Math.max(res, dfs(x, y, (k + 1) % 4, 0));
        }

        memo[idx] = 1 + res;
        return memo[idx];
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    ans = Math.max(ans, dfs(i, j, k, 1) + 1);
                }
            }
        }
    }
    return ans;
};