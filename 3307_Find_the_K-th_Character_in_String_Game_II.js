/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
    let n = 1;
    let i = 0;
    while (n < k) {
        n *= 2;
        i++;
    }
    let d = 0;
    while (n > 1) {
        if (k > n / 2) {
            k -= n / 2;
            d += operations[i - 1];
        }
        n /= 2;
        i--;
    }
    return String.fromCharCode('a'.charCodeAt(0) + (d % 26));
};