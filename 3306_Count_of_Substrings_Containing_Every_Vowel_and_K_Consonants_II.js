// Solution that beats 100% of users

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
function countOfSubstrings(word, k) {
    return atMost(word, k) - atMost(word, k - 1);
}

function atMost(word, k) {
    let a = 0, e = 0, i = 0, o = 0, u = 0;
    let count = 0;
    for (let l = 0, r = 0; r < word.length; r++) {
        switch (word[r]) {
            case 'a': a++; break;
            case 'e': e++; break;
            case 'i': i++; break;
            case 'o': o++; break;
            case 'u': u++; break;
            default: k--;
        }

        while (a && e && i && o && u && k < 0) {
            switch (word[l++]) {
                case 'a': a--; break;
                case 'e': e--; break;
                case 'i': i--; break;
                case 'o': o--; break;
                case 'u': u--; break;
                default: k++;
            }
        }
        count += r - l + 1;
    }
    return count;
}

// Solution that beats 10% of users

/**
* @param {string} word
* @param {number} k
* @return {number}
*/
var countOfSubstrings = function (word, k) {
    const n = word.length;
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

    const cons = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        cons[i + 1] = cons[i] + (vowelsSet.has(word[i]) ? 0 : 1);
    }

    const consMap = {};
    for (let i = 0; i <= n; i++) {
        const cnt = cons[i];
        if (!(cnt in consMap)) {
            consMap[cnt] = [];
        }
        consMap[cnt].push(i);
    }

    const nextOccurrence = new Array(n).fill(Infinity);
    const next_a = new Array(n + 1).fill(Infinity);
    const next_e = new Array(n + 1).fill(Infinity);
    const next_i = new Array(n + 1).fill(Infinity);
    const next_o = new Array(n + 1).fill(Infinity);
    const next_u = new Array(n + 1).fill(Infinity);

    next_a[n] = next_e[n] = next_i[n] = next_o[n] = next_u[n] = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        next_a[i] = word[i] === 'a' ? i : next_a[i + 1];
        next_e[i] = word[i] === 'e' ? i : next_e[i + 1];
        next_i[i] = word[i] === 'i' ? i : next_i[i + 1];
        next_o[i] = word[i] === 'o' ? i : next_o[i + 1];
        next_u[i] = word[i] === 'u' ? i : next_u[i + 1];
        nextOccurrence[i] = Math.max(next_a[i], next_e[i], next_i[i], next_o[i], next_u[i]);
    }

    function lowerBound(arr, value) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (arr[mid] < value) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }

    let ans = 0;
    for (let l = 0; l < n; l++) {
        const m = nextOccurrence[l];
        if (m === Infinity) continue;
        const lowerP = Math.max(l + 1, m + 1);

        const target = cons[l] + k;
        if (!(target in consMap)) continue;
        const arr = consMap[target];
        const idx = lowerBound(arr, lowerP);
        ans += (arr.length - idx);
    }

    return ans;
};