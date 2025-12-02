/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function (points) {
    const mod = 10 ** 9 + 7;
    const cnt = new Map();
    for (const p of points) {
        const y = p[1];
        cnt.set(y, (cnt.get(y) || 0) + 1);
    }

    let ans = 0;
    let s = 0;

    for (const v of cnt.values()) {
        const t = (BigInt(v) * BigInt(v - 1) / BigInt(2)) % BigInt(mod);

        const current_ans = (BigInt(s) * t) % BigInt(mod);
        ans = (BigInt(ans) + current_ans) % BigInt(mod);

        s = (BigInt(s) + t) % BigInt(mod);
    }

    return Number(ans);
};