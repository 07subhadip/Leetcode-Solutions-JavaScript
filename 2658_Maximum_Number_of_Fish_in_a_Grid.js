/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let max = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
            return 0;
        }
        const fish = grid[i][j];
        grid[i][j] = 0; 
        return fish + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                const currentSum = dfs(i, j);
                max = Math.max(max, currentSum);
            }
        }
    }
    
    return max;
};