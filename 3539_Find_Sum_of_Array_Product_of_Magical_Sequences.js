/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function (m, k, nums) {
    const MOD = 1_000_000_007n;

    const factorialCache = new Map();
    const combCache = new Map();
    const powCache = new Map();
    const memo = new Map();

    const modPow = (base, exp) => {
        base = BigInt(base) % MOD;
        exp = BigInt(exp);
        let res = 1n;
        while (exp > 0n) {
            if (exp & 1n) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return res;
    };

    const nCr = (n, r) => {
        if (r < 0 || r > n) return 0n;
        const key = `${n},${r}`;
        if (combCache.has(key)) return combCache.get(key);
        let num = 1n, den = 1n;
        for (let i = 0; i < r; i++) {
            num = (num * BigInt(n - i)) % MOD;
            den = (den * BigInt(i + 1)) % MOD;
        }
        const invDen = modPow(den, MOD - 2n);
        const res = (num * invDen) % MOD;
        combCache.set(key, res);
        return res;
    };

    const bitCount = (x) => {
        let count = 0;
        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }
        return count;
    };

    const dp = (m, k, i, carry) => {
        const key = `${m},${k},${i},${carry}`;
        if (memo.has(key)) return memo.get(key);

        if (m < 0 || k < 0 || (m + bitCount(carry) < k)) return 0n;
        if (m === 0) return BigInt(k === bitCount(carry));
        if (i === nums.length) return 0n;

        let res = 0n;

        for (let count = 0; count <= m; count++) {
            const combVal = nCr(m, count);
            const powVal = modPow(nums[i], count);
            const contribution = (combVal * powVal) % MOD;
            const newCarry = carry + count;
            const next = dp(m - count, k - (newCarry % 2), i + 1, Math.floor(newCarry / 2));
            res = (res + next * contribution) % MOD;
        }

        memo.set(key, res);
        return res;
    };

    return Number(dp(m, k, 0, 0));
};