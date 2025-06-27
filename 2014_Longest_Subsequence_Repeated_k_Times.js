/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function (s, k) {
    const check = (t, k) => {
        let i = 0;
        for (const c of s) {
            if (c === t[i]) {
                i++;
                if (i === t.length) {
                    k--;
                    if (k === 0) {
                        return true;
                    }
                    i = 0;
                }
            }
        }
        return false;
    };

    const cnt = new Array(26).fill(0);
    for (const c of s) {
        cnt[c.charCodeAt(0) - 97]++;
    }

    const cs = [];
    for (let i = 0; i < 26; ++i) {
        if (cnt[i] >= k) {
            cs.push(String.fromCharCode(97 + i));
        }
    }

    const q = [''];
    let ans = '';
    while (q.length > 0) {
        const cur = q.shift();
        for (const c of cs) {
            const nxt = cur + c;
            if (check(nxt, k)) {
                ans = nxt;
                q.push(nxt);
            }
        }
    }

    return ans;
};