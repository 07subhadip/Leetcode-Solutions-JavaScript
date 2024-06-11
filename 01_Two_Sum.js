/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = 0;j<nums.length;j++){
    //         if(i == j){
    //             continue;
    //         }
    //         let sum = nums[i]+nums[j];
    //         if(sum == target){
    //             return [i,j]
    //         }else{
    //             sum = 0;
    //         }
    //     }
    // }

    // const numIndices = {};
    // for(let i = 0 ; i< nums.length; i++){
    //     const complement = target - nums[i];

    //     if(numIndices.hasOwnProperty(complement)){
    //         return[numIndices[complement],i];
    //     }

    //     numIndices[nums[i]] = i;
    // }
    // return [];

    const numIndices = new Map();
    for(let i = 0;i<nums.length;i++){
        const complement = target - nums[i];

        if(numIndices.has(complement)){
            return[numIndices.get(complement),i];
        }
        numIndices.set(nums[i],i);
    }
    return []
};