/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function (skill, mana) {
    const n = skill.length;
    let f = Array(n).fill(0);

    for (const x of mana) {
        let tot = 0;
        for (let i = 0; i < n; ++i) {
            tot = Math.max(tot, f[i]) + skill[i] * x;
        }
        f[n - 1] = tot;
        for (let i = n - 2; i >= 0; --i) {
            f[i] = f[i + 1] - skill[i + 1] * x;
        }
    }
    return f[n - 1];
};