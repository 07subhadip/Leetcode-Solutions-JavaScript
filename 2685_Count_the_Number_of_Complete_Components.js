/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    let adj = Array.from({ length: n }, () => [])

    for (let [a, b] of edges) {
        adj[a].push(b)
        adj[b].push(a)
    }

    let visited = new Array(n).fill(false)

    const dfs = (node, componentSet) => {
        if (visited[node]) return
        visited[node] = true
        componentSet.add(node)

        for (let neighbor of adj[node]) {
            dfs(neighbor, componentSet)
        }
    }

    let completeCount = 0

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let componentSet = new Set()
            dfs(i, componentSet)
            let k = componentSet.size
            let edgeCount = 0

            for (let [a, b] of edges) {
                if (componentSet.has(a) && componentSet.has(b)) {
                    edgeCount++
                }
            }

            if (edgeCount === (k * (k - 1) / 2)) {
                completeCount++
            }
        }
    }

    return completeCount
};