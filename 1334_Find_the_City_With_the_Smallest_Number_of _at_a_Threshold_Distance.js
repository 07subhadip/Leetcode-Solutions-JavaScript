/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    const INF = Number.MAX_SAFE_INTEGER;
    let dist = Array.from({ length: n }, () => Array(n).fill(INF));
    
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    
    for (let [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    
    let minNeighbors = n;
    let cityWithMinNeighbors = -1;
    
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i != j && dist[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= minNeighbors) {
            minNeighbors = count;
            cityWithMinNeighbors = i;
        }
    }
    
    return cityWithMinNeighbors;
};
