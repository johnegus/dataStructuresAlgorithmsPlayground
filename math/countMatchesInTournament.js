// 1688. Count of Matches in Tournament


// Share
// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

 

// Example 1:

let n = 8
// Output: 6
// Explanation: Details of the tournament: 
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.



/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(teams) {
    let games = 0;
    let teamsLeft = teams;
    while (teamsLeft > 1){
        if (teamsLeft % 2 === 0) {
            games += teamsLeft / 2 
            teamsLeft = teamsLeft / 2
        }

        else {
            games += (teamsLeft -1) / 2 
            teamsLeft = ((teamsLeft -1) / 2) + 1
        }

       
    }

    return games
};


// var numberOfMatches = function (n) {
//     // Create variables for teams and matches
//     let teams = n;
//     let matches = 0;
//     // While loop until teams equal 1
//     while (teams != 1) {
//       if (teams % 2 === 0) {
//         matches = teams / 2 + matches;
//         teams = teams / 2;
//       } else {
//         matches = (teams - 1) / 2 + matches;
//         teams = (teams - 1) / 2 + 1;
//       }
//     }
  
//     return matches;
//   };

console.log(numberOfMatches(8))
console.log(numberOfMatches(14))
console.log(numberOfMatches(7))

