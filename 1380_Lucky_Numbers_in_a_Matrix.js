/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let minInRow = new Set();
    let maxInCol = new Set();
    let luckyNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        let minVal = Math.min(...matrix[i]);
        minInRow.add(minVal);
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let maxVal = -Infinity;
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > maxVal) {
                maxVal = matrix[i][j];
            }
        }
        maxInCol.add(maxVal);
    }

    for (let val of minInRow) {
        if (maxInCol.has(val)) {
            luckyNumbers.push(val);
        }
    }

    return luckyNumbers;
};