/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    const n = s.length;
    let result = s;

    function addOdd(str, k) {
        let arr = str.split('');
        for (let i = 1; i < n; i += 2) {
            arr[i] = String((parseInt(arr[i]) + a * k) % 10);
        }
        return arr.join('');
    }

    function addEven(str, k) {
        let arr = str.split('');
        for (let i = 0; i < n; i += 2) {
            arr[i] = String((parseInt(arr[i]) + a * k) % 10);
        }
        return arr.join('');
    }

    let rotated = s;
    const seen = new Set();

    while (!seen.has(rotated)) {
        seen.add(rotated);

        if (b % 2 === 1) {
            for (let evenAdd = 0; evenAdd < 10; evenAdd++) {
                let temp = addEven(rotated, evenAdd);
                for (let oddAdd = 0; oddAdd < 10; oddAdd++) {
                    let candidate = addOdd(temp, oddAdd);
                    if (candidate < result) {
                        result = candidate;
                    }
                }
            }
        } else {
            for (let oddAdd = 0; oddAdd < 10; oddAdd++) {
                let candidate = addOdd(rotated, oddAdd);
                if (candidate < result) {
                    result = candidate;
                }
            }
        }

        rotated = rotated.slice(-b) + rotated.slice(0, -b);
    }

    return result;
};