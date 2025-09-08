/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    const countSteps = (prefix, next) => {
        let steps = 0
        while (prefix <= n) {
            steps += Math.min(n + 1, next) - prefix
            prefix *= 10
            next *= 10
        }
        return steps
    }

    let curr = 1
    k -= 1

    while (k > 0) {
        const steps = countSteps(curr, curr + 1)
        if (steps <= k) {
            curr += 1
            k -= steps
        } else {
            curr *= 10
            k -= 1
        }
    }

    return curr
};