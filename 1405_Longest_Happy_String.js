/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let ans = [];
    let store = [
        ['a', a],
        ['b', b],
        ['c', c],
    ];

    while (true) {
        store.sort((x, y) => y[1] - x[1]);

        let hasNext = false;

        for (let i = 0; i < store.length; i++) {
            let [ch, count] = store[i];

            if (count <= 0) {
                continue;
            }

            const n = ans.length;

            if (n >= 2 && ans[n - 1] === ch && ans[n - 2] === ch) {
                continue;
            }

            hasNext = true;
            ans.push(ch);
            store[i][1]--;
            break;
        }

        if (!hasNext) {
            break;
        }
    }

    return ans.join('');
};
