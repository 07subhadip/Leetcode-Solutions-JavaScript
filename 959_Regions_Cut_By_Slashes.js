/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const parent = [];
    
    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) parent[rootY] = rootX;
    };

    for (let i = 0; i < n * n * 4; i++) {
        parent[i] = i;
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const root = 4 * (i * n + j);
            const val = grid[i][j];
            
            if (val !== '\\') {
                union(root + 0, root + 3);
                union(root + 1, root + 2);
            }
            if (val !== '/') {
                union(root + 0, root + 1);
                union(root + 2, root + 3);
            }

            if (i > 0) {
                union(root + 0, root - 4 * n + 2);
            }
            if (j > 0) {
                union(root + 3, root - 4 + 1);
            }
        }
    }
    
    let regions = 0;
    for (let i = 0; i < parent.length; i++) {
        if (find(i) === i) regions++;
    }
    return regions;
};