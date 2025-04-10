/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
    let t = (start - 1).toString();
    let f = Array(20).fill(-1);

    const dfs = (pos, lim) => {
        if (t.length < s.length) {
            return 0;
        }

        if (!lim && f[pos] !== -1) {
            return f[pos];
        }

        if (t.length - pos === s.length) {
            if (lim) {
                return s <= t.substring(pos) ? 1 : 0;
            }
            
            return 1;
        }

        let ans = 0;
        const up = Math.min(lim ? +t[pos] : 9, limit);

        for (let i = 0; i <= up; i++) {
            ans += dfs(pos + 1, lim && i === +t[pos]);
        }

        if (!lim) {
            f[pos] = ans;
        }

        return ans;
    };

    const countBelowStart = dfs(0, true);

    t = finish.toString();
    f = Array(20).fill(-1);

    const countUpToFinish = dfs(0, true);

    return countUpToFinish - countBelowStart;
};