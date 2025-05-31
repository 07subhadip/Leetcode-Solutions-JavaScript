/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
    const n = board.length
    const getCoordinates = s => {
        const quot = Math.floor((s - 1) / n)
        const rem = (s - 1) % n
        const row = n - 1 - quot
        const col = quot % 2 === 0 ? rem : n - 1 - rem
        return [row, col]
    }
    const visited = new Set()
    const queue = [[1, 0]]
    while (queue.length > 0) {
        const [s, moves] = queue.shift()
        if (s === n * n) return moves
        for (let i = 1; i <= 6; i++) {
            let next = s + i
            if (next > n * n) continue
            const [row, col] = getCoordinates(next)
            if (board[row][col] !== -1) next = board[row][col]
            if (!visited.has(next)) {
                visited.add(next)
                queue.push([next, moves + 1])
            }
        }
    }
    return -1
};