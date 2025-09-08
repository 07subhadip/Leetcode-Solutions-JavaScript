/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    // const MOD = 1000000007
    const MOD = 10e8 + 7

    let graph = Array.from({ length: n }, () => [])

    for (let [u, v, time] of roads) {
        graph[u].push([v, time])
        graph[v].push([u, time])
    }

    let dist = Array(n).fill(Infinity)
    dist[0] = 0
    let ways = Array(n).fill(0)
    ways[0] = 1

    let visited = Array(n).fill(false)

    for (let i = 0; i < n; i++) {
        let u = -1

        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
                u = j
            }
        }

        if (dist[u] === Infinity) break

        visited[u] = true

        for (let [v, time] of graph[u]) {
            if (!visited[v]) {
                if (dist[u] + time < dist[v]) {
                    dist[v] = dist[u] + time
                    ways[v] = ways[u]
                }
                else if (dist[u] + time === dist[v]) {
                    ways[v] = (ways[v] + ways[u]) % MOD
                }
            }
        }
    }

    return ways[n - 1]
};