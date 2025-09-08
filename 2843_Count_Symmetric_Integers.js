/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;

    for (let num = low; num <= high; num++) {
        const str = num.toString();
        const len = str.length;

        if (len % 2 === 0) {
            const mid = len / 2;
            const firstHalf = str.slice(0, mid);
            const secondHalf = str.slice(mid);

            const sum1 = [...firstHalf].reduce((acc, digit) => acc + Number(digit), 0);
            const sum2 = [...secondHalf].reduce((acc, digit) => acc + Number(digit), 0);

            if (sum1 === sum2) {
                count++;
            }
        }
    }

    return count;
};