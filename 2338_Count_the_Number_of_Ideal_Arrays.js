const MOD = 1e9 + 7
const MOD_BIGINT = BigInt(MOD)

/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
function idealArrays(n, maxValue) {
    const maxExponent = 13
    const maxA = (n - 1) + maxExponent
    const fact = new Array(maxA + 1).fill(0n)
    const invFact = new Array(maxA + 1).fill(0n)

    fact[0] = 1n

    for (let i = 1; i <= maxA; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD_BIGINT
    }

    invFact[maxA] = powMod(fact[maxA], MOD_BIGINT - 2n, MOD_BIGINT)

    for (let i = maxA - 1; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD_BIGINT
    }

    let ans = 0n

    for (let v = 1; v <= maxValue; v++) {
        const factors = factorize(v)
        let product = 1n

        for (const prime of Object.keys(factors)) {
            const e = factors[prime];
            const a = e + (n - 1)
            const b = n - 1

            if (a < b) {
                product = 0n;
                break;
            }

            const comb = (fact[a] * invFact[b] % MOD_BIGINT) * invFact[a - b] % MOD_BIGINT
            product = (product * comb) % MOD_BIGINT
        }

        ans = (ans + product) % MOD_BIGINT
    }

    return Number(ans % MOD_BIGINT)
}

function factorize(v) {
    const factors = {}

    if (v === 1) {
        return factors;
    }

    let temp = v

    for (let i = 2; i * i <= temp; i++) {
        while (temp % i === 0) {
            factors[i] = (factors[i] || 0) + 1
            temp = Math.floor(temp / i)
        }
    }

    if (temp > 1) {
        factors[temp] = 1
    }

    return factors
}

function powMod(a, b, mod) {
    let res = 1n
    a = a % mod

    while (b > 0n) {
        if (b % 2n === 1n) {
            res = (res * a) % mod;
        }

        a = (a * a) % mod;
        b = b >> 1n;
    }

    return res
}