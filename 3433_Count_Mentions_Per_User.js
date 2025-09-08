/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const mentions = new Array(numberOfUsers).fill(0);
    const offlineEnd = new Array(numberOfUsers).fill(0);

    events.sort((a, b) => {
        const tsA = parseInt(a[1]);
        const tsB = parseInt(b[1]);
        if (tsA !== tsB) {
            return tsA - tsB;
        } else {
            const typeA = a[0];
            const typeB = b[0];
            if (typeA === 'OFFLINE' && typeB === 'MESSAGE') return -1;
            if (typeA === 'MESSAGE' && typeB === 'OFFLINE') return 1;
            return 0;
        }
    });

    for (const event of events) {
        const type = event[0];
        const ts = parseInt(event[1]);
        if (type === 'OFFLINE') {
            const userId = parseInt(event[2]);
            offlineEnd[userId] = ts + 60;
        } else {
            const mentionsStr = event[2];
            const tokens = mentionsStr.split(' ');
            for (const token of tokens) {
                if (token.startsWith('id')) {
                    const userId = parseInt(token.substring(2));
                    mentions[userId]++;
                } else if (token === 'ALL') {
                    for (let i = 0; i < numberOfUsers; i++) {
                        mentions[i]++;
                    }
                } else if (token === 'HERE') {
                    for (let i = 0; i < numberOfUsers; i++) {
                        if (offlineEnd[i] <= ts) {
                            mentions[i]++;
                        }
                    }
                }
            }
        }
    }

    return mentions;
};