/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    const ans = [];
    for (const c of s) {
        const n = ans.length;
        if (n < 2 || c !== ans[n - 1] || c !== ans[n - 2]) {
            ans.push(c);
        }
    }
    return ans.join('');
};

// Solution 2

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let count = 1, ans = s[0]

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
        } else {
            count = 1
        }

        if (count < 3) {
            ans += s[i]
        }
    }

    return ans
};