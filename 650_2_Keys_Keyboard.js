/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let operations = 0;
    let divisor = 2;
    
    while (n > 1) {
        while (n % divisor === 0) {
            operations += divisor;
            n /= divisor;
        }
        divisor++;
    }
    
    return operations;
};