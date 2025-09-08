/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    // nums.sort((a, b) => a - b);
    // let moves = 0;
    // let current = nums[0];

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] <= current) {
    //         moves += (current + 1 - nums[i]);
    //         current++;
    //     } else {
    //         current = nums[i];
    //     }
    // }
    
    // return moves;

     const maxVal = 100000;
    const count = new Array(maxVal + 1).fill(0);

    // Count frequencies of each number
    for (const num of nums) {
        count[num]++;
    }

    let moves = 0;
    let excess = 0;

    for (let i = 0; i <= maxVal; i++) {
        if (count[i] > 1) {
            // Calculate excess and moves needed
            excess += (count[i] - 1);
            moves -= (count[i] - 1) * i;
        } else if (excess > 0 && count[i] === 0) {
            // Fill the missing slots with excess
            excess--;
            moves += i;
        }
    }

    // Deal with remaining excess if any
    let extraIndex = maxVal + 1;
    while (excess > 0) {
        moves += extraIndex;
        extraIndex++;
        excess--;
    }

    return moves;
};