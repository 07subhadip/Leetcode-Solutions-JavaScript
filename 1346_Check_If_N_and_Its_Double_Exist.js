/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const s = new Set();
    for (const x of arr) {
        if (s.has(x * 2) || (x % 2 === 0 && s.has(x / 2))) {
            return true;
        }
        s.add(x);
    }
    return false;
};