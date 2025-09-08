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
    const lines = input.trim().split("\n");
    let index = 0;
    const T = parseInt(lines[index++]);
    
    let results = [];
    
    for (let t = 0; t < T; t++) {
        const [N, X] = lines[index++].split(" ").map(Number);
        const bottleCapacities = lines[index++].split(" ").map(Number);
        
        bottleCapacities.sort((a, b) => a - b);
        
        let totalWater = X;
        let count = 0;
        
        for (let i = 0; i < N; i++) {
            if (totalWater >= bottleCapacities[i]) {
                totalWater -= bottleCapacities[i];
                count++;
            } else {
                break;
            }
        }
        
        results.push(count);
    }
    
    for (const result of results) {
        console.log(result);
    }
}