/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    const g = Array.from({ length: n }, () => []);
    for (let i = 0; i < n - 1; ++i) {
        g[i].push(i + 1);
    }
    const bfs = (i) => {
        const q = [i];
        const vis = Array(n).fill(false);
        vis[i] = true;
        for (let d = 0; ; ++d) {
            const nq = [];
            for (const u of q) {
                if (u === n - 1) {
                    return d;
                }
                for (const v of g[u]) {
                    if (!vis[v]) {
                        vis[v] = true;
                        nq.push(v);
                    }
                }
            }
            q.splice(0, q.length, ...nq);
        }
    };
    const ans = [];
    for (const [u, v] of queries) {
        g[u].push(v);
        ans.push(bfs(0));
    }
    return ans;
};