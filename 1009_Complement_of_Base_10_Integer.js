/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    if (n === 0) return 1;

    let mask = 0;

    while (mask < n) {
        mask = (mask << 1) | 1;
    }

    return mask ^ n;
};
