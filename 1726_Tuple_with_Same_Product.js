/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let productMap = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];

            productMap.set(product, (productMap.get(product) || 0) + 1);
        }
    }

    for (let freq of productMap.values()) {
        if (freq > 1) {
            count += freq * (freq - 1) * 4; 
        }
    }

    return count;
};