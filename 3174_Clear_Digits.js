/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    while (/\d/.test(s)) {
        let idx = s.search(/\d/);

        let leftIdx = idx - 1;
        while (leftIdx >= 0 && /\d/.test(s[leftIdx])) {
            leftIdx--;
        }

        if (leftIdx >= 0) {
            s = s.substring(0, leftIdx) + s.substring(leftIdx + 1, idx) + s.substring(idx + 1);
        } else {
            s = s.substring(0, idx) + s.substring(idx + 1);
        }
    }
    return s;
};