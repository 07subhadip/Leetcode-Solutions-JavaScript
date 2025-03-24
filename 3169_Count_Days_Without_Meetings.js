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