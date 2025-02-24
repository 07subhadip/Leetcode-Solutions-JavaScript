/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const parent = new Array(n).fill(-1);
    const depth = new Array(n).fill(0);
    const queue = [0];
    let ptr = 0;
    parent[0] = -1;
    const visited = new Set([0]);
    while (ptr < queue.length) {
        const u = queue[ptr++];
        for (const v of adj[u]) {
            if (!visited.has(v)) {
                visited.add(v);
                parent[v] = u;
                depth[v] = depth[u] + 1;
                queue.push(v);
            }
        }
    }

    const children = Array.from({ length: n }, () => []);
    for (let u = 0; u < n; u++) {
        for (const v of adj[u]) {
            if (v !== parent[u]) {
                children[u].push(v);
            }
        }
    }

    const bobPath = [];
    let current = bob;
    while (current !== -1) {
        bobPath.push(current);
        current = parent[current];
    }
    const bobTime = new Map();
    for (let i = 0; i < bobPath.length; i++) {
        bobTime.set(bobPath[i], i);
    }

    const contribution = new Array(n);
    for (let u = 0; u < n; u++) {
        if (bobTime.has(u)) {
            const aliceT = depth[u];
            const bt = bobTime.get(u);
            if (aliceT < bt) {
                contribution[u] = amount[u];
            } else if (aliceT > bt) {
                contribution[u] = 0;
            } else {
                contribution[u] = amount[u] / 2;
            }
        } else {
            contribution[u] = amount[u];
        }
    }

    let maxSum = -Infinity;
    const q = [{ node: 0, sum: contribution[0] }];
    ptr = 0;
    while (ptr < q.length) {
        const { node: u, sum } = q[ptr++];
        if (children[u].length === 0) {
            maxSum = Math.max(maxSum, sum);
            continue;
        }
        for (const v of children[u]) {
            q.push({ node: v, sum: sum + contribution[v] });
        }
    }

    return maxSum;
};