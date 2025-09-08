/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
    const goodSets = new Map()

    function reverse(s) {
        return s.split('').reverse().join('')
    }

    const L = Math.floor((n + 1) / 2)
    const start = (L === 1 ? 1 : Math.pow(10, L - 1))
    const end = Math.pow(10, L)

    for (let num = start; num < end; num++) {
        const half = num.toString()
        let palStr

        if (n % 2 === 0) {
            palStr = half + reverse(half)
        } else {
            palStr = half + reverse(half.slice(0, -1))
        }
        const palNum = parseInt(palStr, 10)
        if (palNum % k !== 0) continue

        const freq = new Array(10).fill(0)

        for (let ch of palStr) {
            freq[parseInt(ch, 10)]++
        }

        const key = freq.join(',')
        goodSets.set(key, freq)
    }

    const fact = new Array(n + 1)
    fact[0] = 1

    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i - 1] * i
    }

    let totalCount = 0
    for (let freq of goodSets.values()) {
        let totalPerm = fact[n]

        for (let d = 0; d < 10; d++) {
            totalPerm /= fact[freq[d]]
        }

        let leadZeroCount = 0

        if (freq[0] > 0) {
            let ways = fact[n - 1]
            ways /= fact[freq[0] - 1]

            for (let d = 1; d < 10; d++) {
                ways /= fact[freq[d]]
            }

            leadZeroCount = ways
        }

        totalCount += (totalPerm - leadZeroCount)
    }

    return totalCount
};