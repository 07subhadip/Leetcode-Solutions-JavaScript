/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) {
        adj[a].push(b);
    }

    const reachable = Array.from({ length: numCourses }, () => 
        Array.from({ length: numCourses }, () => false)
    );

    for (let u = 0; u < numCourses; u++) {
        const queue = [u];
        reachable[u][u] = true; 

        while (queue.length > 0) {
            const current = queue.shift();
            for (const neighbor of adj[current]) {
                if (!reachable[u][neighbor]) {
                    reachable[u][neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }

    return queries.map(([u, v]) => reachable[u][v]);
};