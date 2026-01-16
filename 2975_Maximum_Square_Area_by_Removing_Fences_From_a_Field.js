/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
    const MOD = 1000000007;

    const getEdges = (fences, border) => {
        const set = new Set();
        const list = [...fences];
        list.push(1);
        list.push(border);
        list.sort((a, b) => a - b);

        for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                set.add(list[j] - list[i]);
            }
        }

        return set;
    };

    const hEdges = getEdges(hFences, m);
    const vEdges = getEdges(vFences, n);

    let res = 0;
    for (const e of hEdges) {
        if (vEdges.has(e)) {
            res = Math.max(res, e);
        }
    }

    if (res === 0) {
        return -1;
    }

    return Number((BigInt(res) * BigInt(res)) % BigInt(MOD));
};