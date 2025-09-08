var primeFactors = (n) => {
    let i = 2;
    let ans = new Set();

    while (i * i <= n) {
        while (n % i === 0) {
            ans.add(i);
            n = Math.floor(n / i);
        }
        i += 1;
    }

    if (n > 1) {
        ans.add(n);
    }

    return ans.size;
};

function modPow(base, exponent, mod) {
    let result = 1n;
    base = base % mod;

    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            result = (result * base) % mod;
        }

        base = (base * base) % mod;
        exponent = exponent / 2n;
    }

    return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
    let mod = BigInt(1e9 + 7);
    let arr = nums.map((x, i) => [i, primeFactors(x), x]);
    let n = nums.length;
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let stk = [];

    for (let [i, f, x] of arr) {
        while (stk.length && stk[stk.length - 1][0] < f) {
            stk.pop();
        }

        if (stk.length) {
            left[i] = stk[stk.length - 1][1];
        }

        stk.push([f, i]);
    }

    stk = [];

    for (let [i, f, x] of arr.slice().reverse()) {
        while (stk.length && stk[stk.length - 1][0] <= f) {
            stk.pop();
        }

        if (stk.length) {
            right[i] = stk[stk.length - 1][1];
        }

        stk.push([f, i]);
    }

    arr.sort((a, b) => b[2] - a[2]);
    let ans = 1n;

    for (let [i, f, x] of arr) {
        let l = left[i], r = right[i];
        let cnt = (i - l) * (r - i);

        if (cnt <= k) {
            ans = (ans * modPow(BigInt(x), BigInt(cnt), mod)) % mod;
            k -= cnt;
        } else {
            ans = (ans * modPow(BigInt(x), BigInt(k), mod)) % mod;
            break;
        }
    }

    return Number(ans);
};
