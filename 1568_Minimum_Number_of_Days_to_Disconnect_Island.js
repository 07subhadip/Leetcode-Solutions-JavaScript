/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    function isDisconnected(grid) {
        let visited = Array.from({ length: m }, () => Array(n).fill(false));
        let islands = 0;

        function dfs(x, y) {
            if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0 || visited[x][y]) {
                return;
            }
            visited[x][y] = true;
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    islands++;
                    if (islands > 1) return true;
                    dfs(i, j);
                }
            }
        }

        return islands !== 1;
    }

    if (isDisconnected(grid)) return 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                if (isDisconnected(grid)) return 1;
                grid[i][j] = 1;
            }
        }
    }

    return 2;
};