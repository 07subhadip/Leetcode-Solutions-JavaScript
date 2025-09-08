/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, a) {
    let total = 0

    const C3 = [1, 3, 3, 1]

    for (let k = 0; k <= 3; k++) {
        let t = n - (a + 1) * k
        if (t < 0) continue

        let sign = (k % 2 === 0 ? 1 : -1)

        let c3k = C3[k]

        let c2 = ((t + 2) * (t + 1)) / 2

        total += sign * c3k * c2
    }

    return total
};