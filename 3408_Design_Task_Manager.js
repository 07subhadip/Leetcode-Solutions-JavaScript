if (typeof PriorityQueue === "undefined") {
    class PriorityQueue {
        constructor(compare) {
            this.data = [];
            this.compare = compare;
        }

        enqueue(item) {
            this.data.push(item);
            this.data.sort(this.compare);
        }

        dequeue() {
            return this.data.shift();
        }

        isEmpty() {
            return this.data.length === 0;
        }
    }
}

var TaskManager = function (tasks) {
    this.d = new Map();
    this.pq = new PriorityQueue((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return b[0] - a[0];
    });
    for (const task of tasks) {
        this.add(task[0], task[1], task[2]);
    }
};

TaskManager.prototype.add = function (userId, taskId, priority) {
    this.d.set(taskId, [userId, priority]);
    this.pq.enqueue([priority, taskId]);
};

TaskManager.prototype.edit = function (taskId, newPriority) {
    const e = this.d.get(taskId);
    if (!e) return;
    const userId = e[0];
    this.d.set(taskId, [userId, newPriority]);
    this.pq.enqueue([newPriority, taskId]);
};

TaskManager.prototype.rmv = function (taskId) {
    this.d.delete(taskId);
};

TaskManager.prototype.execTop = function () {
    while (!this.pq.isEmpty()) {
        const [priority, taskId] = this.pq.dequeue();
        const e = this.d.get(taskId);
        if (e && e[1] === priority) {
            this.d.delete(taskId);
            return e[0];
        }
    }
    return -1;
};