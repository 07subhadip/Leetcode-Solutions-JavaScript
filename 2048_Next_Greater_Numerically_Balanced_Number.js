/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
    const combinations = [
        [1],
        [2],
        [3], [1, 2],
        [4], [1, 3],
        [5], [1, 4], [2, 3],
        [6], [1, 5], [2, 4], [1, 2, 3],
        [7], [1, 6], [2, 5], [3, 4], [1, 2, 4],
        [8], [1, 7], [2, 6], [3, 5], [1, 2, 5], [1, 3, 4]
    ];

    const balancedNumbers = [];

    function generatePermutations(freq, current, totalLength) {
        if (current.length === totalLength) {
            balancedNumbers.push(parseInt(current));
            return;
        }

        for (let digit = 1; digit <= 9; digit++) {
            if (freq[digit] > 0) {
                freq[digit]--;
                generatePermutations(freq, current + digit, totalLength);
                freq[digit]++;
            }
        }
    }

    for (const combo of combinations) {
        const freq = new Array(10).fill(0);
        let totalLength = 0;

        for (const digit of combo) {
            freq[digit] = digit;
            totalLength += digit;
        }

        generatePermutations(freq, '', totalLength);
    }

    balancedNumbers.sort((a, b) => a - b);

    for (const num of balancedNumbers) {
        if (num > n) {
            return num;
        }
    }

    return -1;
};