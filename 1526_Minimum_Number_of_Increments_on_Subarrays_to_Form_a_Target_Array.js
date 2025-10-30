/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
    let operations = target[0];

    for (let i = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            operations += target[i] - target[i - 1];
        }
    }

    return operations;
};