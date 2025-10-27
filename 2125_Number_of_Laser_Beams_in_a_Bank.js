/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let totalBeams = 0;
    let prevDevices = 0;

    for (let row of bank) {
        let currDevices = 0;
        for (let char of row) {
            if (char === '1') {
                currDevices++;
            }
        }

        if (currDevices > 0) {
            totalBeams += prevDevices * currDevices;
            prevDevices = currDevices;
        }
    }

    return totalBeams;
};