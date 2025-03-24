// Solution 1 : Beats 61.29% of Users on Runtime

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    if (meetings === null || meetings.length === 0) {
        return days;
    }

    meetings.sort((a, b) => a[0] - b[0]);

    const mergedMeetings = [];
    mergedMeetings.push([...meetings[0]]);

    for (let i = 1; i < meetings.length; i++) {
        const currentMeeting = meetings[i];
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        if (currentMeeting[0] <= lastMergedMeeting[1]) {
            lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);
        } else {
            mergedMeetings.push([...currentMeeting]);
        }
    }

    let totalBusyDays = 0;

    for (const meeting of mergedMeetings) {
        totalBusyDays += (meeting[1] - meeting[0] + 1);
    }

    return days - totalBusyDays;
};

//Solution 2 : Beats 58.06% of Users on Runtime

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    let merged = [];

    for (let meeting of meetings) {
        if (merged.length === 0 || merged[merged.length - 1][1] < meeting[0] - 1) {
            merged.push([meeting[0], meeting[1]]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], meeting[1]);
        }
    }

    let freeDays = 0;

    if (merged.length > 0 && merged[0][0] > 1) {
        freeDays += merged[0][0] - 1;
    }

    for (let i = 1; i < merged.length; i++) {
        let prevEnd = merged[i - 1][1];
        let nextStart = merged[i][0];

        if (prevEnd < nextStart - 1) {
            freeDays += nextStart - prevEnd - 1;
        }
    }

    if (merged.length > 0 && merged[merged.length - 1][1] < days) {
        freeDays += days - merged[merged.length - 1][1];
    }

    if (merged.length === 0) {
        freeDays = days;
    }

    return freeDays;
};