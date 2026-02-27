const { AvlTree } = require('@datastructures-js/binary-search-tree');

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function (s, k) {
    const n = s.length;

    const ts = [new AvlTree(), new AvlTree()];

    for (let i = 0; i <= n; i++) {
        ts[i % 2].insert(i);
    }

    let cnt0 = 0;
    for (const c of s) {
        if (c === '0') cnt0++;
    }

    ts[cnt0 % 2].remove(cnt0);

    let q = [cnt0];
    let ans = 0;

    while (q.length > 0) {
        const nq = [];

        for (const cur of q) {
            if (cur === 0) {
                return ans;
            }

            const l = cur + k - 2 * Math.min(cur, k);
            const r = cur + k - 2 * Math.max(k - n + cur, 0);

            const t = ts[l % 2];
            let node = t.upperBound(l, true);
            while (node && node.getValue() <= r) {
                const val = node.getValue();
                nq.push(val);
                t.remove(val);
                node = t.upperBound(l, false);
            }
        }

        q = nq;
        ans++;
    }

    return -1;
};
