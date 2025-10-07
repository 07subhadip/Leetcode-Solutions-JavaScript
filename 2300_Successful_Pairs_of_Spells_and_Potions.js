/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);

    const result = [];

    for (let spell of spells) {
        const minPotionStrength = Math.ceil(success / spell);

        let left = 0;
        let right = potions.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= minPotionStrength) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        result.push(potions.length - left);
    }

    return result;
};