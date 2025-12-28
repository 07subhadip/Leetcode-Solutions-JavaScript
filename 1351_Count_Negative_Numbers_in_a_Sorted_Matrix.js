/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0
    let n = grid[0].length

    for (let row of grid) {
        for (let i = n - 1; i >= 0; i--) {
            if (row[i] < 0) {
                count++
            } else {
                break
            }
        }
    }

    return count
};