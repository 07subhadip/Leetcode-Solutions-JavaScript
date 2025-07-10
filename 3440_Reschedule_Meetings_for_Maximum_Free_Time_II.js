/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
    const n = startTime.length;

    const leftGaps = new Array(n).fill(0);
    leftGaps[0] = startTime[0];
    for (let i = 1; i < n; i++) {
        leftGaps[i] = Math.max(leftGaps[i - 1], startTime[i] - endTime[i - 1]);
    }

    const rightGaps = new Array(n).fill(0);
    rightGaps[n - 1] = eventTime - endTime[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightGaps[i] = Math.max(rightGaps[i + 1], startTime[i + 1] - endTime[i]);
    }

    let answer = 0;

    for (let i = 0; i < n; i++) {
        const leftGap = (i === 0)
            ? leftGaps[0]
            : startTime[i] - endTime[i - 1];

        const rightGap = (i === n - 1)
            ? rightGaps[n - 1]
            : startTime[i + 1] - endTime[i];

        const duration = endTime[i] - startTime[i];
        let interval = 0;
        if (
            (i > 0 && leftGaps[i - 1] >= duration) ||
            (i < n - 1 && rightGaps[i + 1] >= duration)
        ) {
            interval = duration;
        }

        answer = Math.max(answer, leftGap + interval + rightGap);
    }

    return answer;
};