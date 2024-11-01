/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const ans = [];
    for (const c of s) {
        const n = ans.length;
        if (n < 2 || c !== ans[n - 1] || c !== ans[n - 2]) {
            ans.push(c);
        }
    }
    return ans.join('');
};