process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    let data = input.trim().split("\n");
    let T = parseInt(data[0]);
    let index = 1;

    const directions = [
        [-1, 0], // up
        [1, 0], // down
        [0, -1], // left
        [0, 1] // right
    ];

    for (let t = 0; t < T; t++) {
        let [N, M, X1, Y1, X2, Y2] = data[index].split(' ').map(Number);
        let matrix = [];

        for (let i = 0; i < N; i++) {
            matrix.push(data[index + 1 + i].split(' ').map(Number));
        }

        index += 1 + N;

        // Converting 1-based to 0-based indices for easier array handling
        let startX = X1 - 1;
        let startY = Y1 - 1;
        let endX = X2 - 1;
        let endY = Y2 - 1;

        // BFS to find if there's a path from (startX, startY) to (endX, endY)
        let queue = [[startX, startY]];
        let visited = Array.from({ length: N }, () => Array(M).fill(false));
        visited[startX][startY] = true;

        let found = false;

        while (queue.length > 0) {
            let [currentX, currentY] = queue.shift();

            if (currentX === endX && currentY === endY) {
                found = true;
                break;
            }

            for (let [dx, dy] of directions) {
                let newX = currentX + dx;
                let newY = currentY + dy;

                if (
                    newX >= 0 && newX < N && newY >= 0 && newY < M &&
                    !visited[newX][newY] &&
                    matrix[newX][newY] > matrix[currentX][currentY]
                ) {
                    queue.push([newX, newY]);
                    visited[newX][newY] = true;
                }
            }
        }

        console.log(found ? "YES" : "NO");
    }
}