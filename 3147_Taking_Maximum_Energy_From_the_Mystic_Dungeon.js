/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
    const n = energy.length;
    const dp = new Array(n).fill(0);

    for (let i = n - 1; i >= Math.max(0, n - k); i--) {
        if (i + k < n) {
            dp[i] = energy[i];
        } else {
            dp[i] = energy[i];
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (i + k < n) {
            dp[i] = energy[i];
            if (i + k < n) {
                dp[i] += dp[i + k];
            }
        } else {
            dp[i] = energy[i];
        }
    }



    let maxEnergy = -Infinity;
    for (let i = 0; i < n; i++) {
        if (i + k < n) {
        } else {
            dp[i] = energy[i];
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (i + k < n) {
            dp[i] = energy[i] + dp[i + k];
        } else {
            dp[i] = energy[i];
        }
    }


    for (let i = 0; i < n; i++) {
        maxEnergy = Math.max(maxEnergy, dp[i]);
    }

    return maxEnergy;
};