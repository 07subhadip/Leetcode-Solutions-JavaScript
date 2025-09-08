/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let uglyNumbers = new Array(n);
    uglyNumbers[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    let nextMultipleOf2 = 2;
    let nextMultipleOf3 = 3;
    let nextMultipleOf5 = 5;
    
    for (let i = 1; i < n; i++) {
        let nextUglyNumber = Math.min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
        uglyNumbers[i] = nextUglyNumber;

        if (nextUglyNumber === nextMultipleOf2) {
            i2++;
            nextMultipleOf2 = uglyNumbers[i2] * 2;
        }
        if (nextUglyNumber === nextMultipleOf3) {
            i3++;
            nextMultipleOf3 = uglyNumbers[i3] * 3;
        }
        if (nextUglyNumber === nextMultipleOf5) {
            i5++;
            nextMultipleOf5 = uglyNumbers[i5] * 5;
        }
    }
    
    return uglyNumbers[n-1];
};