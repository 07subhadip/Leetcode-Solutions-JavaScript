/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    if(n == 0){
        return 0
    }

    let k = 0

    while(Math.pow(2,k) <= n){
        k++
    }

    k--

    return (Math.pow(2, k+1) - 1 - minimumOneBitOperations((Math.pow(2, k) ^ n)))
};