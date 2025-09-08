/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s; // No change needed

    const rows = new Array(numRows).fill('');
    let rowIndex = 0;
    let direction = -1; // Direction of movement (-1 for upward, 1 for downward)

    for (let i = 0; i < s.length; i++) {
        rows[rowIndex] += s[i]; // Add character to current row
        if (rowIndex === 0 || rowIndex === numRows - 1) {
            direction *= -1; // Change direction at the first and last row
        }
        rowIndex += direction; // Move to the next row
    }

    return rows.join('');

    // if (numRows === 1 || numRows >= s.length) return s; // No change needed
    
    // let result = '';
    // const cycleLen = 2 * numRows - 2; // Length of each cycle
    
    // for (let i = 0; i < numRows; i++) {
    //     for (let j = i; j < s.length; j += cycleLen) {
    //         result += s[j]; // Add character at index j
    //         // For rows other than the first and last, add character at index j + cycleLen - 2 * i
    //         if (i !== 0 && i !== numRows - 1) {
    //             const idx = j + cycleLen - 2 * i;
    //             if (idx < s.length) {
    //                 result += s[idx];
    //             }
    //         }
    //     }
    // }

    // return result;
};