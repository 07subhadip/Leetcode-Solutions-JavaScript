/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
    const graph2 = buildGraph(edges2)
    const m = edges2.length + 1
    let maxReachableInGraph2 = 0
    for (let i = 0; i < m; i++) {
        maxReachableInGraph2 = Math.max(maxReachableInGraph2, dfs(graph2, i, -1, k - 1))
    }
    const graph1 = buildGraph(edges1)
    const n = edges1.length + 1
    const result = Array(n).fill(maxReachableInGraph2)
    for (let i = 0; i < n; i++) {
        result[i] += dfs(graph1, i, -1, k)
    }
    return result
};

function buildGraph(edges) {
    const n = edges.length + 1
    const graph = Array.from({ length: n }, () => [])
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    return graph
}

function dfs(graph, currentNode, parentNode, depth) {
    if (depth < 0) return 0
    let count = 1
    for (const neighbor of graph[currentNode]) {
        if (neighbor !== parentNode) {
            count += dfs(graph, neighbor, currentNode, depth - 1)
        }
    }
    return count
}