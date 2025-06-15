/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
    let arr = Array.from(String(num), Number)

    let toReplaceMax = arr.find(x => x != 9) ?? arr[0]
    let maxArr = arr.map(x => x === toReplaceMax ? 9 : x)

    let toReplaceMin
    if (arr[0] != 1) {
        toReplaceMin = arr[0]
        minArr = arr.map(x => x === toReplaceMin ? 1 : x)
    } else {
        toReplaceMin = arr.find((x, i) => i > 0 && x != 0 && x != 1)
        if (toReplaceMin !== undefined) {
            minArr = arr.map(x => x === toReplaceMin ? 0 : x)
        } else {
            minArr = arr.slice()
        }
    }

    let maxNum = parseInt(maxArr.join(''))
    let minNum = parseInt(minArr.join(''))

    return maxNum - minNum
};