/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let str = num.toString()

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "6") {
            str = str.slice(0, i) + "9" + str.slice(i + 1)
            break
        }
    }

    return Number(str)
};