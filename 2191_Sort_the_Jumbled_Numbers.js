/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    function getMappedValue(num) {
        let strNum = num.toString();
        let mappedStr = '';
        for (let char of strNum) {
            let digit = parseInt(char);
            mappedStr += mapping[digit];
        }
        return parseInt(mappedStr);
    }

    let mappedNums = nums.map(num => ({
        original: num,
        mapped: getMappedValue(num)
    }));

     mappedNums.sort((a, b) => a.mapped - b.mapped);

    return mappedNums.map(item => item.original);
};