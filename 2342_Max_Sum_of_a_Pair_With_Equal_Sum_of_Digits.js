const digitSum = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const map = new Map();
    let ans = -1;

    for (const num of nums) {
        const sum = digitSum(num);

        if (map.has(sum)) {
            ans = Math.max(ans, num + map.get(sum));
            map.set(sum, Math.max(num, map.get(sum)));
        } else {
            map.set(sum, num);
        }
    }

    return ans;
};