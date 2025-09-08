/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let islandSize = new Map();
    let index = 2, maxIsland = 0;

    function dfs(i, j, index) {
        if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = index; 
        let size = 1;
        for (let [dx, dy] of dirs) {
            size += dfs(i + dx, j + dy, index);
        }
        return size;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let size = dfs(i, j, index);
                islandSize.set(index, size);
                maxIsland = Math.max(maxIsland, size);
                index++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let seen = new Set();
                let newSize = 1; 
                for (let [dx, dy] of dirs) {
                    let x = i + dx, y = j + dy;
                    if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] > 1) {
                        seen.add(grid[x][y]); 
                    }
                }
                for (let idx of seen) newSize += islandSize.get(idx);
                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }

    return maxIsland;
};