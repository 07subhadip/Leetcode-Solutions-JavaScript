/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
    const memo = new Map();

    function solve(l, r, k) {
        if (l === r) return [1, 1];         
        if (l > r) return solve(r, l, k);    

        const key = `${l},${r},${k}`;
        if (memo.has(key)) return memo.get(key);

        let earliest = Infinity;
        let latest = -Infinity;
        const nextK = Math.floor((k + 1) / 2);
        const half = Math.floor(k / 2);

        for (let i = 1; i <= l; i++) {
            for (let j = l - i + 1; j <= r - i; j++) {
                if (i + j > nextK || i + j < l + r - half) continue;

                const [e, L] = solve(i, j, nextK);
                earliest = Math.min(earliest, e + 1);
                latest = Math.max(latest, L + 1);
            }
        }

        const res = [earliest, latest];
        memo.set(key, res);
        return res;
    }

    const fromEnd = n - secondPlayer + 1;
    return solve(firstPlayer, fromEnd, n);
};