/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    function check(u, v) {
        for (const x of languages[u - 1]) {
            for (const y of languages[v - 1]) {
                if (x === y) {
                    return true;
                }
            }
        }
        return false;
    }

    const s = new Set();
    for (const [u, v] of friendships) {
        if (!check(u, v)) {
            s.add(u);
            s.add(v);
        }
    }

    const cnt = new Map();
    for (const u of s) {
        for (const l of languages[u - 1]) {
            cnt.set(l, (cnt.get(l) || 0) + 1);
        }
    }

    return s.size - Math.max(0, ...cnt.values());
};