
var NumberContainers = function () {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();
};

function binarySearch(arr, x) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
    if (this.indexToNumber.has(index)) {
        const oldNumber = this.indexToNumber.get(index);
        let arr = this.numberToIndices.get(oldNumber);
        const pos = binarySearch(arr, index);
        if (pos < arr.length && arr[pos] === index) {
            arr.splice(pos, 1);
        }
    }

    this.indexToNumber.set(index, number);

    if (!this.numberToIndices.has(number)) {
        this.numberToIndices.set(number, []);
    }
    let arr = this.numberToIndices.get(number);
    const pos = binarySearch(arr, index);
    arr.splice(pos, 0, index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    if (!this.numberToIndices.has(number)) return -1;
    let arr = this.numberToIndices.get(number);
    return arr.length > 0 ? arr[0] : -1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */