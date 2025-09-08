/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    const n = s.length;
    let [ans, cnt] = [0, 0];
    for (let i = n - 1; ~i; --i) {
        if (s[i] === '1') {
            ++cnt;
            ans += n - i - cnt;
        }
    }
    return ans;
};