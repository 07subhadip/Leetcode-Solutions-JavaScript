/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    let res = 0

    while (num1 && num2) {
        if (num1 >= num2) {
            res += Math.floor(num1 / num2)
            num1 = num1 % num2
        } else {
            res += Math.floor(num2 / num1)
            num2 = num2 % num1
        }
    }

    return res
};