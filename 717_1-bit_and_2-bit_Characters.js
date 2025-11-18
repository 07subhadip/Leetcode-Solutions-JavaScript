/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let counter = 0

    while (counter < bits.length - 1) {
        if (bits[counter] == 0) {
            counter++
        } else {
            counter += 2
        }
    }

    return (counter == bits.length - 1)
};