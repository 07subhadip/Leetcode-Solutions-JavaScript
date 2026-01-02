/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let hashmap = {}

    for (let num of nums) {
        if (hashmap[num]) {
            hashmap[num]++
        } else {
            hashmap[num] = 1
        }
    }

    for (let [key, value] of Object.entries(hashmap)) {
        if (hashmap[key] > 1) {
            return Number(key)
        }
    }
};