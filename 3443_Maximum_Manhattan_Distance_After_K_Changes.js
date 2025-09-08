/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (s, k) {
    const n = s.length
    const D = { N: [0, 1], S: [0, -1], E: [1, 0], W: [-1, 0] }
    const W = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ]

    class Heap {
        constructor(cmp) {
            this.cmp = cmp
            this.A = []
        }
        size() {
            return this.A.length
        }
        peek() {
            return this.A[0]
        }
        push(x) {
            this.A.push(x)
            let i = this.A.length - 1
            while (i > 0) {
                let p = (i - 1) >> 1
                if (this.cmp(this.A[i], this.A[p]) < 0) {
                    ;[this.A[i], this.A[p]] = [this.A[p], this.A[i]]
                    i = p
                } else break
            }
        }
        pop() {
            if (this.A.length === 0) return null
            const top = this.A[0]
            const x = this.A.pop()
            if (this.A.length) {
                this.A[0] = x
                let i = 0, n = this.A.length
                while (true) {
                    let l = 2 * i + 1, r = 2 * i + 2, smallest = i
                    if (l < n && this.cmp(this.A[l], this.A[smallest]) < 0) smallest = l
                    if (r < n && this.cmp(this.A[r], this.A[smallest]) < 0) smallest = r
                    if (smallest !== i) {
                        ;[this.A[i], this.A[smallest]] = [this.A[smallest], this.A[i]]
                        i = smallest
                    } else break
                }
            }
            return top
        }
    }

    const objs = W.map(([a, b]) => ({
        a,
        b,
        origVal: 0,
        sumG: 0,
        sel: new Heap((x, y) => x - y),
        cand: new Heap((x, y) => y - x)
    }))

    let answer = 0
    for (let i = 0; i < n; i++) {
        const [dx, dy] = D[s[i]]
        for (const o of objs) {
            o.origVal += o.a * dx + o.b * dy
            const v = o.a * dx + o.b * dy
            const g = 1 - v
            if (g > 0) {
                if (o.sel.size() < k) {
                    o.sel.push(g)
                    o.sumG += g
                } else if (k > 0) {
                    const minSel = o.sel.peek()
                    if (g > minSel) {
                        o.sel.pop()
                        o.sumG -= minSel
                        o.sel.push(g)
                        o.sumG += g
                        o.cand.push(minSel)
                    } else {
                        o.cand.push(g)
                    }
                }
            }
            answer = Math.max(answer, o.origVal + o.sumG)
        }
    }
    return answer
};