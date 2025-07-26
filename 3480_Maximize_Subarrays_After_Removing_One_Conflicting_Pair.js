/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function (n, conflictingPairs) {
    const m = conflictingPairs.length;
    const pairs = new Array(m);
    const byX = Array.from({ length: n + 1 }, () => []);
    for (let k = 0; k < m; k++) {
        let [a, b] = conflictingPairs[k];
        if (a > b) [a, b] = [b, a];
        pairs[k] = { x: a, y: b };
        byX[a].push(k);
    }

    const INF = n + 1;

    const M1 = new Array(n + 2), M2 = new Array(n + 2);
    const i1 = new Array(n + 2), i2 = new Array(n + 2);
    let y1 = INF, y2 = INF;
    let id1 = -1, id2 = -1;

    for (let L = n; L >= 1; L--) {
        for (const k of byX[L]) {
            const y = pairs[k].y;
            if (y < y1) {
                y2 = y1; id2 = id1;
                y1 = y; id1 = k;
            } else if (y < y2) {
                y2 = y; id2 = k;
            }
        }
        M1[L] = y1; i1[L] = id1;
        M2[L] = y2; i2[L] = id2;
    }

    const deltaSum = new Array(m).fill(0);
    let base = 0;
    for (let L = 1; L <= n; L++) {
        const f1 = Math.max(0, M1[L] - L);
        const f2 = Math.max(0, M2[L] - L);
        base += f1;
        const d = f2 - f1;
        const responsible = i1[L];
        if (responsible >= 0) {
            deltaSum[responsible] += d;
        }
    }

    let ans = 0;
    for (let k = 0; k < m; k++) {
        ans = Math.max(ans, base + deltaSum[k]);
    }
    return ans;
};