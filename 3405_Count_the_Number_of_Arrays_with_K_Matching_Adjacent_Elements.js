const MX = 1e5 + 10
const MOD = BigInt(1e9 + 7)

const f = Array(MX).fill(1n)
const g = Array(MX).fill(1n)

function qpow(a, k) {
    let res = 1n
    while (k !== 0) {
        if ((k & 1) === 1) res = res * a % MOD
        a = a * a % MOD
        k >>= 1
    }
    return res
}

; (function init() {
    for (let i = 1; i < MX; ++i) {
        f[i] = f[i - 1] * BigInt(i) % MOD
        g[i] = qpow(f[i], Number(MOD - 2n))
    }
})()

function comb(m, n) {
    return f[m] * g[n] % MOD * g[m - n] % MOD
}

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function (n, m, k) {
    const ans = comb(n - 1, k) * BigInt(m) % MOD * qpow(BigInt(m - 1), n - k - 1) % MOD
    return Number(ans)
};