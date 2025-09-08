/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function (paths) {
    class Node {
        constructor() {
            this.children = new Map();
            this.del = false;
        }
    }
    const root = new Node();
    for (const p of paths) {
        let cur = root;
        for (const name of p) {
            if (!cur.children.has(name)) cur.children.set(name, new Node());
            cur = cur.children.get(name);
        }
    }
    const sigMap = new Map();
    function dfs(node) {
        const arr = [];
        for (const [name, child] of node.children) {
            arr.push([name, dfs(child)]);
        }
        arr.sort((a, b) => a[0].localeCompare(b[0]));
        let sig = "";
        for (const [name, cs] of arr) {
            sig += `(${name}${cs})`;
        }
        if (sig) {
            if (!sigMap.has(sig)) sigMap.set(sig, []);
            sigMap.get(sig).push(node);
        }
        return sig;
    }
    dfs(root);
    for (const [sig, nodes] of sigMap) {
        if (nodes.length > 1) {
            for (const n of nodes) n.del = true;
        }
    }
    const ans = [];
    function collect(node, path) {
        for (const [name, child] of node.children) {
            if (child.del) continue;
            ans.push([...path, name]);
            collect(child, [...path, name]);
        }
    }
    collect(root, []);
    return ans;
};