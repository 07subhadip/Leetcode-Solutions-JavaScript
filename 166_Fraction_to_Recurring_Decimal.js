/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0";
    // Use BigInt for safe integer ops
    let n = BigInt(numerator);
    let d = BigInt(denominator);

    // Determine sign
    const negative = (n < 0n) !== (d < 0n);
    if (n < 0n) n = -n;
    if (d < 0n) d = -d;

    // Integer part
    const intPart = n / d;
    let rem = n % d;
    let result = (negative ? "-" : "") + intPart.toString();

    if (rem === 0n) {
        return result;
    }

    // Fractional part
    result += ".";
    const remIndex = new Map(); // map remainder -> index in fractional part string
    let frac = "";

    while (rem !== 0n) {
        // If this remainder seen before -> repeating
        if (remIndex.has(rem)) {
            const idx = remIndex.get(rem);
            // insert parentheses around repeating part
            frac = frac.slice(0, idx) + "(" + frac.slice(idx) + ")";
            result += frac;
            return result;
        }

        remIndex.set(rem, frac.length);

        rem *= 10n;
        const digit = rem / d;
        frac += digit.toString();
        rem = rem % d;
    }

    // No repeating part
    result += frac;
    return result;
};