/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const graph = Array.from({length: n}, () => []);
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        graph[u].push([v, succProb[i]]);
        graph[v].push([u, succProb[i]]);
    }

    const maxHeap = new MaxPriorityQueue({ priority: x => x[1] });  // Max-Heap for best probability
    const probabilities = new Array(n).fill(0);
    probabilities[start_node] = 1;

    maxHeap.enqueue([start_node, 1]);

    while (!maxHeap.isEmpty()) {
        const [currentNode, currentProb] = maxHeap.dequeue().element;

        if (currentNode === end_node) {
            return currentProb;
        }

        for (const [neighbor, edgeProb] of graph[currentNode]) {
            const newProb = currentProb * edgeProb;

            if (newProb > probabilities[neighbor]) {
                probabilities[neighbor] = newProb;
                maxHeap.enqueue([neighbor, newProb]);
            }
        }
    }

    return 0;
};