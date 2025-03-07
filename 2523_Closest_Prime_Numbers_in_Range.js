/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    const isPrime = new Array(right + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let prevPrime = -1;
    let bestGap = Infinity;
    let ans = [-1, -1];

    for (let i = left; i <= right; i++) {
        if (isPrime[i]) {
            if (prevPrime !== -1 && i - prevPrime < bestGap) {
                bestGap = i - prevPrime;
                ans = [prevPrime, i];
            }
            prevPrime = i;
        }
    }

    return ans;
};