/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    // Step 1: Sort both arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    
    // Step 2: Calculate the total number of moves
    let totalMoves = 0;
    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }
    
    return totalMoves;
};