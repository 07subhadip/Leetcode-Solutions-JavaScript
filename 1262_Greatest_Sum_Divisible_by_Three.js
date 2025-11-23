/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    const remainder = totalSum % 3;

    if (remainder === 0) {
        return totalSum;
    }

    const rem1 = [];
    const rem2 = [];

    for (let n of nums) {
        if (n % 3 === 1) {
            rem1.push(n);
        } else if (n % 3 === 2) {
            rem2.push(n);
        }
    }

    rem1.sort((a, b) => a - b);
    rem2.sort((a, b) => a - b);

    let removeAmount = Infinity;

    if (remainder === 1) {
        if (rem1.length >= 1) {
            removeAmount = Math.min(removeAmount, rem1[0]);
        }
        if (rem2.length >= 2) {
            const currentCombo = rem2[0] + rem2[1];
            removeAmount = Math.min(removeAmount, currentCombo);
        }
    } else if (remainder === 2) {
        if (rem2.length >= 1) {
            removeAmount = Math.min(removeAmount, rem2[0]);
        }
        if (rem1.length >= 2) {
            const currentCombo = rem1[0] + rem1[1];
            removeAmount = Math.min(removeAmount, currentCombo);
        }
    }

    if (removeAmount === Infinity) {
        return 0;
    }

    return totalSum - removeAmount;
};