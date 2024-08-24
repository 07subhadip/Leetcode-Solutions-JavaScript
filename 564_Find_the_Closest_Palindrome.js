/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const length = n.length;
    const candidates = new Set();

    candidates.add('1' + '0'.repeat(length - 1) + '1'); 
    candidates.add('9'.repeat(length - 1)); 

    const prefix = n.slice(0, Math.ceil(length / 2));

    const mirror = (str) => {
        const half = str.length;
        return str + str.slice(0, half - (length % 2)).split('').reverse().join('');
    };

    candidates.add(mirror(prefix));
    candidates.add(mirror((BigInt(prefix) + 1n).toString()));
    candidates.add(mirror((BigInt(prefix) - 1n).toString()));

    const nBigInt = BigInt(n);
    let closest = null;
    
    for (const candidate of candidates) {
        if (candidate === n) continue;
        const candidateBigInt = BigInt(candidate);
        const diff = candidateBigInt - nBigInt;
        const absDiff = diff < 0n ? -diff : diff; 
        
        if (closest === null ||
            absDiff < (closest - nBigInt < 0n ? -(closest - nBigInt) : (closest - nBigInt)) ||
            (absDiff === (closest - nBigInt < 0n ? -(closest - nBigInt) : (closest - nBigInt)) && candidateBigInt < closest)) {
            closest = candidateBigInt;
        }
    }

    return closest.toString();
};