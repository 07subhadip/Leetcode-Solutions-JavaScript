/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const map = new Map()
    let count = 0

    for (const domino of dominoes) {
        const sortedDomino = [...domino].sort((a, b) => a - b)
        const key = sortedDomino.join(',')

        if (map.has(key)) {
            count += map.get(key)
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }
    }

    return count
};

// Solution 2 :  Beats 98.39% users on runtime

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const counts = new Array(100).fill(0)
    let ans = 0

    for (let i = 0; i < dominoes.length; ++i) {
        const [a, b] = dominoes[i]
        const low = a < b ? a : b
        const high = a < b ? b : a
        const key = low * 10 + high

        ans += counts[key]
        counts[key]++
    }

    return ans
};