/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const result = [];
    const totalCells = rows * cols;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 1, dirIndex = 0;
    
    let r = rStart, c = cStart;
    result.push([r, c]);
    
    while (result.length < totalCells) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < steps; j++) {
                r += directions[dirIndex][0];
                c += directions[dirIndex][1];
                
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            dirIndex = (dirIndex + 1) % 4;
        }
        steps++;
    }
    
    return result;
};