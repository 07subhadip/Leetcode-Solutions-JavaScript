/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for (let i = 0; i < k; i++) {
        gifts.sort((a, b) => b - a);
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    }
    return gifts.reduce((sum, gift) => sum + gift, 0);
};