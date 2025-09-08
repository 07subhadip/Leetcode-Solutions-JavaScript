/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    let maxOdd = 0;
    let minEven = s.length;

    for (const freq of Object.values(count)) {
        if (freq % 2 === 1) {
            maxOdd = Math.max(maxOdd, freq);
        } else {
            minEven = Math.min(minEven, freq);
        }
    }

    return maxOdd - minEven;
};