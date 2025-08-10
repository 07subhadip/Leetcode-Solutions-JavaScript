/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
    const countDigits = (x) => {
        const counts = Array(10).fill(0)
        while (x > 0) {
            counts[x % 10]++
            x = (x / 10) | 0
        }
        return counts.join(',')
    }

    const target = countDigits(n)

    for (let i = 1; i <= 1000000000; i <<= 1) {
        if (target === countDigits(i)) {
            return true
        }
    }

    return false
};