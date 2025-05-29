/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
    const buildGraph = (edges, n) => {
        const graph = Array.from({ length: n }, () => [])
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        }
        return graph
    }

    const dfs = (graph, node, parent, depth, parity, count) => {
        parity[node] = depth % 2
        count[parity[node]]++
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                dfs(graph, neighbor, node, depth + 1, parity, count)
            }
        }
    }

    const n1 = edges1.length + 1
    const n2 = edges2.length + 1

    const graph1 = buildGraph(edges1, n1)
    const graph2 = buildGraph(edges2, n2)

    const parity1 = Array(n1).fill(0)
    const count1 = [0, 0]
    dfs(graph1, 0, -1, 0, parity1, count1)

    const parity2 = Array(n2).fill(0)
    const count2 = [0, 0]
    dfs(graph2, 0, -1, 0, parity2, count2)

    const result = []
    for (let i = 0; i < n1; i++) {
        const sameParityCount = parity1[i] === 0 ? count1[0] : count1[1]
        const maxCount2 = Math.max(count2[0], count2[1])
        result.push(sameParityCount + maxCount2)
    }

    return result
};