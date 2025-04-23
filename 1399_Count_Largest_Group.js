/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    const digitSum = (x) => {
        let sum = 0

        while (x > 0) {
            sum += x % 10
            x = Math.floor(x / 10)
        }

        return sum
    }

    const sumCounts = {}

    for (let i = 1; i <= n; i++) {
        const s = digitSum(i)
        sumCounts[s] = (sumCounts[s] || 0) + 1
    }

    const counts = Object.values(sumCounts)
    const max = Math.max(...counts)

    return counts.filter(c => c === max).length
};