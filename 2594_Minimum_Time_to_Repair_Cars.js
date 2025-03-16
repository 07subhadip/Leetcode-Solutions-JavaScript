// Solution 1 : Beats 62.50% Users on Runtime
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    const carsRepaired = (time) => {
        let total = 0;

        for (let r of ranks) {
            total += Math.floor(Math.sqrt(time / r));
        }

        return total;
    };

    let minRank = Math.min(...ranks);
    let low = 0;
    let high = minRank * cars * cars;
    let answer = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (carsRepaired(mid) >= cars) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return answer;
};

// Solution 2 :  Beats 31.25% Users on Runtime
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let low = 1;
    let high = Math.min(...ranks) * cars * cars;
    let ans = high;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let totalRepairedCars = 0;

        for (const rank of ranks) {
            totalRepairedCars += Math.floor(Math.sqrt(mid / rank));
        }

        if (totalRepairedCars >= cars) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};