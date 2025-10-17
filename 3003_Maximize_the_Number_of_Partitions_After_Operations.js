/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
    const n = s.length;
    const f = new Map();

    const dfs = (i, cur, t) => {
        if (i >= n) {
            return 1;
        }

        // Create key using BigInt for memoization
        const key = (BigInt(i) << 27n) | (BigInt(cur) << 1n) | BigInt(t);
        if (f.has(key)) {
            return f.get(key);
        }

        const v = 1 << (s.charCodeAt(i) - 97);
        let nxt = cur | v;
        let ans = 0;

        if (bitCount(nxt) > k) {
            ans = dfs(i + 1, v, t) + 1;
        } else {
            ans = dfs(i + 1, nxt, t);
        }

        if (t) {
            for (let j = 0; j < 26; ++j) {
                nxt = cur | (1 << j);
                if (bitCount(nxt) > k) {
                    ans = Math.max(ans, dfs(i + 1, 1 << j, 0) + 1);
                } else {
                    ans = Math.max(ans, dfs(i + 1, nxt, 0));
                }
            }
        }

        f.set(key, ans);
        return ans;
    };

    return dfs(0, 0, 1);
};

function bitCount(i) {
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f;
}