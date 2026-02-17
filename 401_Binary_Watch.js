/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const ans = [];

    for (let i = 0; i < 1 << 10; ++i) {
        const h = i >> 6;
        const m = i & 0b111111;

        if (h < 12 && m < 60 && bitCount(i) === turnedOn) {
            ans.push(`${h}:${m < 10 ? '0' : ''}${m}`);
        }
    }

    return ans;
};

const bitCount = (i) => {
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f;
};
