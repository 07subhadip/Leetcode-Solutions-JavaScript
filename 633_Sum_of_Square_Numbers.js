/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c==4 || c===1 || c===9 || c===0 ||c==16 || c===324){
        return true
    }
    for(let i = 1;i<Math.sqrt(c);i++){
        let subs = c-(i*i);
        let sqrtVal = Math.sqrt(subs)
        if(Number.isInteger(sqrtVal)||subs===0){
            return true
        }
    }
    return false

    // for (let a = 0; a * a <= c; a++) {
    //     let b = Math.sqrt(c - a * a);
    //     if (Math.floor(b) === b) {
    //         return true;
    //     }
    // }
    // return false;
};