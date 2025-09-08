/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let str = num.toString(2);
    let finalStr = ""

    for(let i=0 ; i< str.length ; i++){
        if(str[i] == "0"){
            finalStr+= "1"
        }else if(str[i] == "1"){
            finalStr+= "0"
        }
    }

    return parseInt(finalStr,2)
};

console.log(findComplement(5))
console.log(findComplement(74))
