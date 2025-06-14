/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let arr = Array.from(String(num), Number)

    let toReplaceMax = arr.find(x => x != 9) ?? arr[0]
    let maxArr = arr.map(x => x === toReplaceMax ? 9 : x)

    let toReplaceMin = arr.find(x => x != 0) ?? arr[0]
    let minArr = arr.map(x => x === toReplaceMin ? 0 : x)

    let maxNum = parseInt(maxArr.join(''))
    let minNum = parseInt(minArr.join(''))

    return maxNum - minNum
};