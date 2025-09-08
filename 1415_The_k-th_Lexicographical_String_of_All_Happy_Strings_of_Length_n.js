/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let count = 0;
    let result = "";

    function dfs(curr) {
        if (result) return;
        if (curr.length === n) {
            count++;
            if (count === k) {
                result = curr;
            }
            return;
        }
        for (let ch of ['a', 'b', 'c']) {
            if (curr && curr[curr.length - 1] === ch) continue;
            dfs(curr + ch);
        }
    }

    dfs("");
    return result;
};