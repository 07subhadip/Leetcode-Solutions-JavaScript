/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let stack = []
    let counter = 0

    for (let n of nums) {
        while (stack && (stack[stack.length - 1]) > n) {
            stack.pop()
        }

        if ((n > 0) && ((stack.length === 0) || (n > stack[stack.length - 1]))) {
            counter++
            stack.push(n)
        }
    }

    return counter
};