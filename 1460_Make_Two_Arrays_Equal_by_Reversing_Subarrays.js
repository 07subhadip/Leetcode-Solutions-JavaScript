/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }
    
    return true;
};