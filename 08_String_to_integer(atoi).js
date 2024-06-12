/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Remove leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    
    // Handle signs
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Convert characters to integer until non-digit character or end of string
    while (i < s.length && isDigit(s[i])) {
        const digit = parseInt(s[i]);
        // Check for integer overflow
        if (result > Math.trunc((Math.pow(2, 31) - 1) / 10) || 
            (result === Math.trunc((Math.pow(2, 31) - 1) / 10) && digit > 7)) {
            return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
        }
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};

const isDigit = (char) => {
    return char >= '0' && char <= '9';
};