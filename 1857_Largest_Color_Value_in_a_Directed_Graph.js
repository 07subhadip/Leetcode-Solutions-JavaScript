/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
    const n = colors.length
    const adj = Array.from({ length: n }, () => [])
    const indegree = Array(n).fill(0)

    for (const [u, v] of edges) {
        adj[u].push(v)
        indegree[v]++
    }

    const count = Array.from({ length: n }, () => Array(26).fill(0))
    const queue = []

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    let visited = 0
    let res = 0

    while (queue.length > 0) {
        const node = queue.shift()
        visited++
        const colorIndex = colors.charCodeAt(node) - 'a'.charCodeAt(0)
        count[node][colorIndex]++
        res = Math.max(res, count[node][colorIndex])

        for (const nei of adj[node]) {
            for (let c = 0; c < 26; c++) {
                count[nei][c] = Math.max(count[nei][c], count[node][c])
            }

            indegree[nei]--

            if (indegree[nei] === 0) {
                queue.push(nei)
            }
        }
    }

    return visited === n ? res : -1
};