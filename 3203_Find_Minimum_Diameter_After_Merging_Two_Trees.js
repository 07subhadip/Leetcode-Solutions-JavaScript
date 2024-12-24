/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    const d1 = treeDiameter(edges1);
    const d2 = treeDiameter(edges2);
    return Math.max(d1, d2, Math.ceil(d1 / 2) + Math.ceil(d2 / 2) + 1);
};

const treeDiameter= (edges)=>{
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        g[a].push(b);
        g[b].push(a);
    }
    let ans = 0, a = 0;
    const dfs = (i, fa, t) => {
        for (const j of g[i]) {
            if (j !== fa) {
                dfs(j, i, t + 1);
            }
        }
        if (ans < t) {
            ans = t;
            a = i;
        }
    };
    dfs(0, -1, 0);
    dfs(a, -1, 0);
    return ans;
}