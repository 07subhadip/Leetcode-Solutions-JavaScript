/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    return arr.sort((a, b) => {
        const countA = getBitCount(a);
        const countB = getBitCount(b);

        if (countA !== countB) {
            return countA - countB;
        }

        return a - b;
    });
};

function getBitCount(num) {
    let count = 0;
    while (num > 0) {
        num &= num - 1;
        count++;
    }
    return count;
}
