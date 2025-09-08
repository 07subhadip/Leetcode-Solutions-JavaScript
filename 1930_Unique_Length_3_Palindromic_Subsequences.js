/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let ans = 0;

    for (let c = 97; c <= 122; c++) {
        const char = String.fromCharCode(c);
        const l = s.indexOf(char); 
        const r = s.lastIndexOf(char); 

        if (r - l > 1) {
            const substring = s.slice(l + 1, r);

            const uniqueChars = new Set(substring);
            ans += uniqueChars.size;
        }
    }

    return ans;
};