/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    class Node {
        children = Array(26).fill(null);
        v = -1;
    }

    const m = cost.length;
    const n = source.length;
    const g = Array.from({ length: m << 1 }, () =>
        Array(m << 1).fill(Infinity),
    );
    const root = new Node();
    let idx = 0;
    const f = Array(n).fill(-1);
    const insert = (w) => {
        let node = root;
        for (const c of w) {
            const i = c.charCodeAt(0) - "a".charCodeAt(0);
            if (node.children[i] === null) {
                node.children[i] = new Node();
            }
            node = node.children[i];
        }
        if (node.v < 0) {
            node.v = idx++;
        }
        return node.v;
    };

    const dfs = (i) => {
        if (i >= n) {
            return 0;
        }
        if (f[i] !== -1) {
            return f[i];
        }
        let res = source[i] === target[i] ? dfs(i + 1) : Infinity;
        let p = root;
        let q = root;
        for (let j = i; j < source.length; ++j) {
            p = p.children[source[j].charCodeAt(0) - "a".charCodeAt(0)];
            q = q.children[target[j].charCodeAt(0) - "a".charCodeAt(0)];
            if (p === null || q === null) {
                break;
            }
            if (p.v < 0 || q.v < 0) {
                continue;
            }
            const t = g[p.v][q.v];
            res = Math.min(res, t + dfs(j + 1));
        }
        return (f[i] = res);
    };

    for (let i = 0; i < m; ++i) {
        const x = insert(original[i]);
        const y = insert(changed[i]);
        g[x][y] = Math.min(g[x][y], cost[i]);
    }

    for (let k = 0; k < idx; ++k) {
        for (let i = 0; i < idx; ++i) {
            if (g[i][k] >= Infinity) {
                continue;
            }
            for (let j = 0; j < idx; ++j) {
                g[i][j] = Math.min(g[i][j], g[i][k] + g[k][j]);
            }
        }
    }
    const ans = dfs(0);
    return ans >= Infinity ? -1 : ans;
};
