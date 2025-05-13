/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
    const MOD = 1e9 + 7
    const count = new Array(26).fill(0)
    for (const c of s) {
        count[c.charCodeAt(0) - 97]++
    }

    for (let i = 0; i < t; i++) {
        const nextCount = new Array(26).fill(0)
        for (let j = 0; j < 26; j++) {
            if (j === 25) {
                nextCount[0] = (nextCount[0] + count[25]) % MOD
                nextCount[1] = (nextCount[1] + count[25]) % MOD
            } else {
                nextCount[j + 1] = (nextCount[j + 1] + count[j]) % MOD
            }
        }
        for (let j = 0; j < 26; j++) {
            count[j] = nextCount[j]
        }
    }

    return count.reduce((sum, val) => (sum + val) % MOD, 0)
};