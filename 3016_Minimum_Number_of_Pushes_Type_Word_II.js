/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const counts = new Array(26).fill(0);
        
        for (const c of word) {
            counts[c.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
        }

        counts.sort((a, b) => a - b);

        let res = 0;
        let i = 0;

        while (counts.length) {
            const cnt = counts.shift();
            res += cnt * (1 + Math.floor(i / 8));
            i += 1;
        }

        return Math.abs(res);
};