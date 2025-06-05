/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
    const parent = new Array(26)
    for (let i = 0; i < 26; i++) {
        parent[i] = i
    }

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    function union(x, y) {
        let rootX = find(x)
        let rootY = find(y)
        if (rootX === rootY) return
        if (rootX < rootY) {
            parent[rootY] = rootX
        } else {
            parent[rootX] = rootY
        }
    }

    for (let i = 0; i < s1.length; i++) {
        const a = s1.charCodeAt(i) - 97
        const b = s2.charCodeAt(i) - 97
        union(a, b)
    }

    let result = ''
    for (let ch of baseStr) {
        const idx = ch.charCodeAt(0) - 97
        const root = find(idx)
        result += String.fromCharCode(root + 97)
    }

    return result
};