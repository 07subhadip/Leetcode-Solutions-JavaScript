/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    const weeks = Math.floor(n / 7);
    const remainingDays = n % 7;

    let total = 0;

    total += 28 * weeks + (7 * weeks * (weeks - 1)) / 2;

    total += remainingDays * weeks + (remainingDays * (remainingDays + 1)) / 2;

    return total;
};