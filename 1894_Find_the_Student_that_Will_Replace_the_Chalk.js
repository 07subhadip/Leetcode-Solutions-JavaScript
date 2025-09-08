/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const s = chalk.reduce((acc, cur) => acc + cur, 0);
    k %= s;
    for (let i = 0; ; ++i) {
        if (k < chalk[i]) {
            return i;
        }
        k -= chalk[i];
    }
};