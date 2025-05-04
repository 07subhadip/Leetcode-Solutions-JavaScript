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