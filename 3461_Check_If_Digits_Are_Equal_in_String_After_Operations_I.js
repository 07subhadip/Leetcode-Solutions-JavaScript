/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    const getNextString = (str) => {
        let result = '';
        for (let i = 0; i < str.length - 1; i++) {
            const sum = (Number(str[i]) + Number(str[i + 1])) % 10;
            result += sum.toString();
        }
        return result;
    };

    let current = s;

    while (current.length > 2) {
        current = getNextString(current);
    }

    return current[0] === current[1];
};