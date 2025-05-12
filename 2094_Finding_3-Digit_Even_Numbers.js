/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    const count = new Array(10).fill(0)

    for (const digit of digits) {
        count[digit]++
    }

    const result = []

    for (let i = 100; i <= 998; i += 2) {
        const numCount = new Array(10).fill(0)
        let temp = i
        numCount[temp % 10]++
        temp = Math.floor(temp / 10)
        numCount[temp % 10]++
        temp = Math.floor(temp / 10)
        numCount[temp]++

        let isValid = true

        for (let j = 0; j < 10; j++) {
            if (numCount[j] > count[j]) {
                isValid = false
                break
            }
        }

        if (isValid) {
            result.push(i)
        }
    }

    return result
};