/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
    this.d = new Map();
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
    this.d.set(cell, value);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
    this.d.delete(cell);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
    let ans = 0;
    const cells = formula.slice(1).split('+');
    for (const cell of cells) {
        ans += isNaN(Number(cell)) ? this.d.get(cell) || 0 : Number(cell);
    }
    return ans;
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
