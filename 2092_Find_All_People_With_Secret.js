/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
    const vis = Array(n).fill(false);
    vis[0] = true;
    vis[firstPerson] = true;

    meetings.sort((a, b) => a[2] - b[2]);

    for (let i = 0, m = meetings.length; i < m;) {
        let j = i;
        while (j + 1 < m && meetings[j + 1][2] === meetings[i][2]) {
            ++j;
        }

        const graph = new Map();
        const people = new Set();

        for (let k = i; k <= j; ++k) {
            const [u, v] = meetings[k];
            if (!graph.has(u)) graph.set(u, []);
            if (!graph.has(v)) graph.set(v, []);
            graph.get(u).push(v);
            graph.get(v).push(u);
            people.add(u);
            people.add(v);
        }

        let queue = [];
        for (const person of people) {
            if (vis[person]) {
                queue.push(person);
            }
        }

        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            const neighbors = graph.get(u) || [];
            for (const v of neighbors) {
                if (!vis[v]) {
                    vis[v] = true;
                    queue.push(v);
                }
            }
        }

        i = j + 1;
    }

    const ans = [];
    for (let i = 0; i < n; ++i) {
        if (vis[i]) ans.push(i);
    }
    return ans;
};