/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let pos = new Array(32).fill(Number.MAX_SAFE_INTEGER);
    pos[0] = -1;

    let vowels = 'aeiou';
    let state = 0, ans = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (s[i] === vowels[j]) {
                state ^= (1 << j);
            }
        }

        ans = Math.max(ans, i - pos[state]);

        pos[state] = Math.min(pos[state], i);
    }

    return ans;
};