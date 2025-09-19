/**
 * @param {number} memoryLimit
 */
var Router = function (memoryLimit) {
    this.lim = memoryLimit;
    this.vis = new Set();
    this.q = [];
    this.idx = new Map();
    this.d = new Map();
};

/**
 * Helper to encode a packet uniquely
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @return {number}
 */
Router.prototype.f = function (a, b, c) {
    return Number((BigInt(a) << 46n) | (BigInt(b) << 29n) | BigInt(c));
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function (source, destination, timestamp) {
    var x = this.f(source, destination, timestamp);
    if (this.vis.has(x)) {
        return false;
    }
    this.vis.add(x);
    if (this.q.length >= this.lim) {
        this.forwardPacket();
    }
    this.q.push([source, destination, timestamp]);
    if (!this.d.has(destination)) {
        this.d.set(destination, []);
    }
    this.d.get(destination).push(timestamp);
    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function () {
    if (this.q.length === 0) {
        return [];
    }
    var tuple = this.q.shift();
    var s = tuple[0], d = tuple[1], t = tuple[2];
    this.vis.delete(this.f(s, d, t));
    this.idx.set(d, (this.idx.get(d) || 0) + 1);
    return [s, d, t];
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
    var ls = this.d.get(destination) || [];
    var k = this.idx.get(destination) || 0;
    var i = this.lowerBound(ls, startTime, k);
    var j = this.lowerBound(ls, endTime + 1, k);
    return j - i;
};

/**
 * Helper: lower bound binary search
 * @param {number[]} arr 
 * @param {number} target 
 * @param {number} from 
 * @return {number}
 */
Router.prototype.lowerBound = function (arr, target, from) {
    var l = from, r = arr.length;
    while (l < r) {
        var m = Math.floor((l + r) / 2);
        if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
