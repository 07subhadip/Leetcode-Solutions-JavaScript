/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    const N = s.length;

    const next_zero = Array(N).fill(N);

    for (let i = N - 2; i >= 0; i--) {
        if (s[i + 1] === "0") {
            next_zero[i] = i + 1;
        } else {
            next_zero[i] = next_zero[i + 1];
        }
    }

    let res = 0;

    for (let l = 0; l < N; l++) {
        let zeroes = s[l] === "0" ? 1 : 0;
        let r = l;

        while (zeroes * zeroes <= N) {
            const next_z = r < N ? next_zero[r] : N;
            const ones = (next_z - l) - zeroes;

            if (ones >= zeroes * zeroes) {
                res += Math.min(
                    next_z - r,
                    ones - zeroes * zeroes + 1
                );
            }

            r = next_z;
            zeroes++;

            if (r === N) break;
        }
    }

    return res;
};