/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {

    function check_regex(code) {
        if (code === "") {
            return false;
        } else {
            return /^[a-zA-Z0-9_]+$/.test(code);
        }
    }

    function check_business(s) {
        const proof = ["electronics", "grocery", "pharmacy", "restaurant"];
        return proof.includes(s);
    }

    let ans = [];
    let n = code.length;

    const order = {
        electronics: 0,
        grocery: 1,
        pharmacy: 2,
        restaurant: 3
    };

    for (let i = 0; i < n; i++) {
        if (
            check_regex(code[i]) &&
            check_business(businessLine[i]) &&
            isActive[i]
        ) {
            ans.push([businessLine[i], code[i]]);
        }
    }

    ans.sort((a, b) => {
        if (order[a[0]] !== order[b[0]]) {
            return order[a[0]] - order[b[0]];
        }
        return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    });

    return ans.map(item => item[1]);
};
