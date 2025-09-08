/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    const n = tops.length

    const check = (x) => {
        let rotationsTop = 0
        let rotationsBottom = 0

        for (let i = 0; i < n; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                return Number.MAX_SAFE_INTEGER
            }

            if (tops[i] !== x) rotationsTop++;
            if (bottoms[i] !== x) rotationsBottom++
        }

        return Math.min(rotationsTop, rotationsBottom)
    }

    const rotations = Math.min(check(tops[0]), check(bottoms[0]))

    return rotations === Number.MAX_SAFE_INTEGER ? -1 : rotations
};