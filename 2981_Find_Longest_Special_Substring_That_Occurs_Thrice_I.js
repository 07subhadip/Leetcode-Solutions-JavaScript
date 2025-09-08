/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const n = s.length;
    let l = 0, r = n;

    const check = (x) => {
        const cnt = Array(26).fill(0); 
        for (let i = 0; i < n; ) {
            let j = i + 1;
            while (j < n && s[j] === s[i]) {
                j++;
            }
            const k = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            cnt[k] += Math.max(0, j - i - x + 1);
            if (cnt[k] >= 3) {
                return true;
            }
            i = j;
        }
        return false;
    };

    while (l < r) {
        const mid = Math.floor((l + r + 1) / 2);
        if (check(mid)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }

    return l === 0 ? -1 : l;
};