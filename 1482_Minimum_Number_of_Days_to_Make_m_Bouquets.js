/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length;
   if (k * m > n) {
       return -1; // Impossible to form m bouquets
   }
   
   let left = 1;
   let right = Math.max(...bloomDay);
   
   while (left <= right) {
       const mid = Math.floor((left + right) / 2);
       
       if (canFormBouquets(bloomDay, m, k, mid)) {
           right = mid - 1;
       } else {
           left = mid + 1;
       }
   }
   
   return left;

   // const n = bloomDay.length;
   // if (k * m > n) {
   //     return -1; // Impossible to form m bouquets
   // }
   
   // // Binary search on the maximum possible day value
   // let left = 1;
   // let right = Math.max(...bloomDay);
   
   // while (left < right) {
   //     const mid = Math.floor((left + right) / 2);
       
   //     if (canFormBouquets(bloomDay, m, k, mid)) {
   //         right = mid;
   //     } else {
   //         left = mid + 1;
   //     }
   // }
   
   // return left;
};

function canFormBouquets(bloomDay, m, k, mid) {
   let bouquets = 0;
   let count = 0;
   
   for (let i = 0; i < bloomDay.length; i++) {
       if (bloomDay[i] <= mid) {
           count++;
           if (count === k) {
               bouquets++;
               count = 0;
           }
       } else {
           count = 0;
       }
   }
   
   return bouquets >= m;
}

// function canFormBouquets(bloomDay, m, k, maxDay) {
//     let count = 0;
//     let bouquets = 0;
   
//     for (let i = 0; i < bloomDay.length; i++) {
//         if (bloomDay[i] <= maxDay) {
//             count++;
//             if (count === k) {
//                 bouquets++;
//                 count = 0;
//             }
//         } else {
//             count = 0;
//         }
//     }
   
//     return bouquets >= m;
// }