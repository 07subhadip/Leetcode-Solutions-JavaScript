/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
    let sum = 0;
    let found = 0;

    for (let len = 1; found < n; len++) {
        let start = Math.pow(10, Math.floor((len - 1) / 2));
        let end = Math.pow(10, Math.floor((len + 1) / 2));

        for (let half = start; half < end; half++) {
            let pal = createPalindrome(half, len % 2 === 1);

            if (isBaseKPalindrome(pal, k)) {
                sum += pal;
                found++;

                if (found === n) {
                    return sum;
                }
            }
        }
    }

    return sum;
};

function createPalindrome(half, odd) {
    let pal = half;
    if (odd) {
        half = Math.floor(half / 10);
    }

    while (half > 0) {
        pal = pal * 10 + (half % 10);
        half = Math.floor(half / 10);
    }
    return pal;
}

function isBaseKPalindrome(num, k) {
    let baseK = [];
    let original = num;

    while (num > 0) {
        baseK.push(num % k);
        num = Math.floor(num / k);
    }

    for (let i = 0, j = baseK.length - 1; i < j; i++, j--) {
        if (baseK[i] !== baseK[j]) {
            return false;
        }
    }

    return true;
}