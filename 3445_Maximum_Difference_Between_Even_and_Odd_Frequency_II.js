/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function (S, k) {
    const s = S.split('').map(Number)
    let ans = -Infinity
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            if (a === b) continue
            let curA = 0, curB = 0, preA = 0, preB = 0
            const t = [
                [Infinity, Infinity],
                [Infinity, Infinity]
            ]
            let l = -1
            for (let r = 0; r < s.length; r++) {
                const x = s[r]
                curA += x === a ? 1 : 0
                curB += x === b ? 1 : 0
                while (r - l >= k && curB - preB >= 2) {
                    t[preA & 1][preB & 1] = Math.min(t[preA & 1][preB & 1], preA - preB)
                    l++
                    preA += s[l] === a ? 1 : 0
                    preB += s[l] === b ? 1 : 0
                }
                ans = Math.max(ans, curA - curB - t[(curA & 1) ^ 1][curB & 1])
            }
        }
    }
    return ans
};