/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let stack = [{}];
    let i = 0;
    let n = formula.length;

    while (i < n) {
        if (formula[i] === '(') {
            stack.push({});
            i++;
        } else if (formula[i] === ')') {
            let top = stack.pop();
            i++;
            let start = i;
            while (i < n && formula[i].match(/\d/)) i++;
            let multiplicity = i > start ? parseInt(formula.slice(start, i)) : 1;

            for (let [atom, count] of Object.entries(top)) {
                stack[stack.length - 1][atom] = (stack[stack.length - 1][atom] || 0) + count * multiplicity;
            }
        } else {
            let start = i++;
            while (i < n && formula[i].match(/[a-z]/)) i++;
            let atom = formula.slice(start, i);
            start = i;
            while (i < n && formula[i].match(/\d/)) i++;
            let count = i > start ? parseInt(formula.slice(start, i)) : 1;

            stack[stack.length - 1][atom] = (stack[stack.length - 1][atom] || 0) + count;
        }
    }

    let countMap = stack.pop();
    let sortedAtoms = Object.keys(countMap).sort();
    let result = "";

    for (let atom of sortedAtoms) {
        result += atom;
        if (countMap[atom] > 1) {
            result += countMap[atom];
        }
    }

    return result;
};