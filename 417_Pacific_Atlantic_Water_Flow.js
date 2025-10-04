/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights || heights.length === 0) return [];
    const m = heights.length, n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(r, c, visited) {
        visited[r][c] = true;
        for (let [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                !visited[nr][nc] &&
                heights[nr][nc] >= heights[r][c]
            ) {
                dfs(nr, nc, visited);
            }
        }
    }

    for (let c = 0; c < n; c++) dfs(0, c, pacific);
    for (let r = 0; r < m; r++) dfs(r, 0, pacific);

    for (let c = 0; c < n; c++) dfs(m - 1, c, atlantic);
    for (let r = 0; r < m; r++) dfs(r, n - 1, atlantic);

    const result = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};