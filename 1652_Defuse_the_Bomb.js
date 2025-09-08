/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length; 
    let ans = new Array(n).fill(0); 

    if (k > 0) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n]; 
            }
            ans[i] = sum;
        }
    } else if (k < 0) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 1; j <= -k; j++) {
                sum += code[(i - j + n) % n];
            }
            ans[i] = sum;
        }
    }

    return ans;
};