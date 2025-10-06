/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    const n = rains.length;
    const ans = new Array(n).fill(-1);
    const fullLakes = new Map();
    const dryDays = [];

    for (let i = 0; i < n; i++) {
        const lake = rains[i];

        if (lake === 0) {
            dryDays.push(i);
        } else {
            if (fullLakes.has(lake)) {
                const filledDay = fullLakes.get(lake);

                let left = 0;
                let right = dryDays.length - 1;
                let targetIndex = -1;

                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);
                    if (dryDays[mid] > filledDay) {
                        targetIndex = mid;
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }

                if (targetIndex === -1) {
                    return [];
                }

                const dryDay = dryDays[targetIndex];
                ans[dryDay] = lake;

                dryDays.splice(targetIndex, 1);
            }

            fullLakes.set(lake, i);
        }
    }

    for (const dryDay of dryDays) {
        ans[dryDay] = 1;
    }

    return ans;
};