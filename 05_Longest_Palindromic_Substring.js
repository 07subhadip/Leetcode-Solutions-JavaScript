/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //    if (s.length === 0) return "";
        
    //     let start = 0; // Start index of the longest palindromic substring
    //     let maxLen = 1; // Length of the longest palindromic substring
        
    //     // Create a 2D array to store whether substrings are palindromes
    //     let dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));
        
    //     // All substrings of length 1 are palindromes
    //     for (let i = 0; i < s.length; i++) {
    //         dp[i][i] = true;
    //     }
        
    //     // Check for substrings of length 2
    //     for (let i = 0; i < s.length - 1; i++) {
    //         if (s[i] === s[i + 1]) {
    //             dp[i][i + 1] = true;
    //             start = i;
    //             maxLen = 2;
    //         }
    //     }
        
    //     // Check for substrings of length greater than 2
    //     for (let len = 3; len <= s.length; len++) {
    //         for (let i = 0; i <= s.length - len; i++) {
    //             let j = i + len - 1;
    //             if (s[i] === s[j] && dp[i + 1][j - 1]) {
    //                 dp[i][j] = true;
    //                 start = i;
    //                 maxLen = len;
    //             }
    //         }
    //     }
        
    //     return s.substring(start, start + maxLen); 
    
    
        if (s.length === 0) return "";
    
        let start = 0; // Start index of the longest palindromic substring
        let maxLen = 1; // Length of the longest palindromic substring
    
        // Helper function to expand around a center
        const expandAroundCenter = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                const currLen = right - left + 1;
                if (currLen > maxLen) {
                    start = left;
                    maxLen = currLen;
                }
                left--;
                right++;
            }
        };
    
        for (let i = 0; i < s.length; i++) {
            // Expand around character i (odd length palindrome)
            expandAroundCenter(i, i);
    
            // Expand around characters i and i+1 (even length palindrome)
            expandAroundCenter(i, i + 1);
        }
    
        return s.substring(start, start + maxLen);
    };