// Solution 1 : Beats 90.56% users on runtime

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const state = new Array(n).fill(0);
  const result = [];

  const isSafe = (node) => {
    if (state[node] === 1) {
      state[node] = 3;
      return false;
    }
    if (state[node] !== 0) {
      return state[node] === 2;
    }
    state[node] = 1;
    for (const neighbor of graph[node]) {
      if (!isSafe(neighbor)) {
        state[node] = 3;
        return false;
      }
    }
    state[node] = 2;
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (isSafe(i)) {
      result.push(i);
    }
  }
  return result;
};

// Solution 2 : Beats 27.78% users on runtime

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const reverseGraph = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);

  for (let node = 0; node < n; node++) {
    for (let neighbor of graph[node]) {
      reverseGraph[neighbor].push(node);
      inDegree[node]++;
    }
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const safeNodes = [];
  while (queue.length > 0) {
    const node = queue.shift();
    safeNodes.push(node);
    for (let neighbor of reverseGraph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return safeNodes.sort((a, b) => a - b);
};
