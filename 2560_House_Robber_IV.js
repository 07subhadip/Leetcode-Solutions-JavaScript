/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    const canRob = (capability) => {
        let count = 0;

        for (let i = 0; i < nums.length;) {
            if (nums[i] <= capability) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    };

    let low = Math.min(...nums);
    let high = Math.max(...nums);

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (canRob(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};