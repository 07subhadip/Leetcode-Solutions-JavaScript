/**
 * @param {number} num
 * @return {string}
 */

const units = [
    '','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'
];

const teens = [
    'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'
];

const tens = [
    '','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'
];

const scales = [
    '','Thousand','Million','Billion','Trillion'
];

function convertHundred(num){
let result = ''

if(num>99){
    result += units[Math.floor(num/100)]+' '+'Hundred'+' ';
    num%= 100
}

if(num > 9 && num<20){
    result += teens[num-10]+' '
}else{
    if (Math.floor(num / 10) > 0) {
        result += tens[Math.floor(num / 10)] + ' ';
    }
    if (num % 10 > 0) {
        result += units[num % 10] + ' ';
    }
}

return result.trim()
}

function convertThousands(num){
let result = ''
let scaleCounter = 0

while(num>0){
    if(num%1000 !== 0){
        result = convertHundred(num%1000) + ' ' + scales[scaleCounter] + ' ' + result
    }

    num = Math.floor(num / 1000)
    scaleCounter++
}
return result.trim()
}

var numberToWords = function(num) {
if(num === 0){
    return 'Zero'
}
return convertThousands(num)
};