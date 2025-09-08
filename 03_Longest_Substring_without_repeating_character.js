/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();

    for(let end = 0;end<s.length;end++){
        const currChar = s[end];

        if(charMap.has(currChar)){
            start = Math.max(start,charMap.get(currChar)+1);
        }
        charMap.set(currChar,end);
        maxLength = Math.max(maxLength,end-start+1)
    }
    return maxLength;
};