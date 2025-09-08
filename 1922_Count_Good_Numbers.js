function modExp(base, exponent, mod) {
    base = BigInt(base);
    exponent = BigInt(exponent);
    mod = BigInt(mod);
    let result = 1n;

    while (exponent > 0) {
        if (exponent % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exponent /= 2n;
    }
    return result;
}


/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    const MOD = 1000000007;
    let evenPos = Math.floor((n + 1) / 2);
    let oddPos = Math.floor(n / 2);

    let evenCount = modExp(5, evenPos, MOD);
    let oddCount = modExp(4, oddPos, MOD);

    let total = (evenCount * oddCount) % BigInt(MOD);
    return Number(total);
};