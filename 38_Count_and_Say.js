/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";
    
    for (let i = 2; i <= n; i++) {
        let current = result;
        let nextStr = "";
        let count = 1;
        
        for (let j = 1; j <= current.length; j++) {
            if (j < current.length && current[j] === current[j - 1]) {
                count++;
            } else {
                nextStr += count + current[j - 1];
                count = 1;
            }
        }
        
        result = nextStr;
    }
    
    return result;
};