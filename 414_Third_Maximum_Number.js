/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let m1 = -Infinity;
    let m2 = -Infinity;
    let m3 = -Infinity;

    for (const num of nums) {
        if (num === m1 || num === m2 || num === m3) {
            continue;
        }
        if (num > m1) {
            m3 = m2;
            m2 = m1;
            m1 = num;
        } else if (num > m2) {
            m3 = m2;
            m2 = num;
        } else if (num > m3) {
            m3 = num;
        }
    }
    return m3 !== -Infinity ? m3 : m1;
};