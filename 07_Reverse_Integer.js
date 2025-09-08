/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
   
   while (x !== 0) {
       const digit = x % 10; // Extract the last digit
       x = Math.trunc(x / 10); // Remove the last digit
       // Check for integer overflow
       if (reversed > Math.pow(2, 31) / 10 || (reversed === Math.pow(2, 31) / 10 && digit > 7)) return 0;
       if (reversed < Math.pow(-2, 31) / 10 || (reversed === Math.pow(-2, 31) / 10 && digit < -8)) return 0;
       
       reversed = reversed * 10 + digit; // Build the reversed number
   }
   
   return reversed;
};