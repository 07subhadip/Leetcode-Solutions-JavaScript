/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    const totalSum = n * (n + 1) / 2
    const k = Math.floor(n / m)
    const divisibleSum = m * k * (k + 1) / 2

    return (totalSum - divisibleSum) - divisibleSum
};