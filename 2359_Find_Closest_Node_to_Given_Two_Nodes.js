/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
    const n = edges.length;
    const inf = Number.MAX_SAFE_INTEGER;

    const bfs = (start) => {
        const dist = new Array(n).fill(inf);
        dist[start] = 0;
        const queue = [start];

        while (queue.length > 0) {
            const curr = queue.shift();
            const neighbor = edges[curr];
            if (neighbor !== -1 && dist[neighbor] === inf) {
                dist[neighbor] = dist[curr] + 1;
                queue.push(neighbor);
            }
        }
        return dist;
    };

    const d1 = bfs(node1);
    const d2 = bfs(node2);

    let answer = -1;
    let minDist = inf;

    for (let i = 0; i < n; i++) {
        const maxDist = Math.max(d1[i], d2[i]);
        if (d1[i] !== inf && d2[i] !== inf && maxDist < minDist) {
            minDist = maxDist;
            answer = i;
        }
    }

    return answer;
};