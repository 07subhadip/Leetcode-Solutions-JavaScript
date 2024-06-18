/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    // let profitSum = 0
    // let checkMax = []
    // for(let i = 0 ; i< worker.length;i++){
    //     for(let j = 0;j<difficulty.length;j++){
    //         if(worker[i]>=difficulty[j]){
    //             checkMax.push(profit[j])
    //         }
    //     }
    //     if(checkMax.length>0){
    //         profitSum += Math.max(...checkMax)
    //     }
    //     checkMax = []
    // }
    // return profitSum;

    // Combine difficulty and profit into an array of pairs [difficulty, profit]
    // const jobs = [];
    // for (let i = 0; i < difficulty.length; i++) {
    //     jobs.push([difficulty[i], profit[i]]);
    // }
    
    // // Sort jobs based on difficulty
    // jobs.sort((a, b) => a[0] - b[0]);

    // // Sort worker abilities
    // worker.sort((a, b) => a - b);

    // let maxProfit = 0,
    //     totalProfit = 0,
    //     j = 0;

    // for (let i = 0; i < worker.length; i++) {
    //     // Binary search to find the highest difficulty job worker[i] can handle
    //     while (j < jobs.length && worker[i] >= jobs[j][0]) {
    //         maxProfit = Math.max(maxProfit, jobs[j][1]);
    //         j++;
    //     }
    //     totalProfit += maxProfit;
    // }

    // return totalProfit;

     const jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }
    
    // Sort jobs based on difficulty
    jobs.sort((a, b) => a[0] - b[0]);

    // Sort worker abilities
    worker.sort((a, b) => a - b);

    let maxProfit = 0,
        totalProfit = 0,
        bestProfit = 0, // variable to store the best profit found so far
        j = 0;

    for (let i = 0; i < worker.length; i++) {
        // Binary search to find the highest difficulty job worker[i] can handle
        while (j < jobs.length && worker[i] >= jobs[j][0]) {
            bestProfit = Math.max(bestProfit, jobs[j][1]);
            j++;
        }
        // Add the best profit found for this worker
        totalProfit += bestProfit;
    }

    return totalProfit;
};