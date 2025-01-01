/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0;
    for (const char of s) {
        if (char === '1') {
            totalOnes++;
        }
    }

    let zeros = 0;
    let ones = totalOnes;
    let maxScore = 0;

    for (let i = 0; i < s.length - 1; i++) { 
        if (s[i] === '0') {
            zeros++;
        } else {
            ones--;
        }
        maxScore = Math.max(maxScore, zeros + ones);
    }

    return maxScore;
};