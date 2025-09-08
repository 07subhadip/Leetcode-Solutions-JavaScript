/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    const MOD = 1000000007;
    let countEven = 1;
    let countOdd = 0;
    let result = 0;
    let prefix = 0;

    for (let num of arr) {
        prefix = (prefix + num) % 2;

        if (prefix === 1) {
            result = (result + countEven) % MOD;
            countOdd++;
        } else {
            result = (result + countOdd) % MOD;
            countEven++;
        }
    }

    return result;
};