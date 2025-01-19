/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0) return 0;
    
    const m = heightMap.length, n = heightMap[0].length;
    const vis = Array.from({ length: m }, () => Array(n).fill(false));
    const pq = new MinPriorityQueue({ priority: (cell) => cell[0] });
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                pq.enqueue([heightMap[i][j], i, j]);
                vis[i][j] = true;
            }
        }
    }
    
    let ans = 0;
    const dirs = [-1, 0, 1, 0, -1];

    while (!pq.isEmpty()) {
        const [h, i, j] = pq.dequeue().element;
        
        for (let d = 0; d < 4; d++) {
            let x = i + dirs[d], y = j + dirs[d + 1];
            if (x >= 0 && x < m && y >= 0 && y < n && !vis[x][y]) {
                ans += Math.max(0, h - heightMap[x][y]);
                vis[x][y] = true;
                pq.enqueue([Math.max(h, heightMap[x][y]), x, y]);
            }
        }
    }
    
    return ans;
};