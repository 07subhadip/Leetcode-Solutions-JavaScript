/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
    const g = Array.from({ length: 26 }, () => []);
    const n = s.length;
    const rem = Array(n).fill(false);

    for (let i = 0; i < n; ++i) {
        if (s[i] === '*') {
            rem[i] = true;
            for (let j = 0; j < 26; ++j) {
                if (g[j].length) {
                    rem[g[j].pop()] = true;
                    break;
                }
            }
        } else {
            g[s.charCodeAt(i) - 97].push(i);
        }
    }

    return s.split('').filter((_, i) => !rem[i]).join('');
};