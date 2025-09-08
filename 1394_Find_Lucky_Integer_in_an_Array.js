/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const obj = {}

    for (let val of arr) {
        if (obj[val]) {
            obj[val]++
        } else {
            obj[val] = 1
        }
    }

    let lucky = -1
    for (let key in obj) {
        if (Number(key) == obj[key]) {
            lucky = Math.max(lucky, obj[key])
        }
    }

    return lucky
};