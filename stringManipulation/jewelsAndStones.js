// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type of stone you have. 
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

//Clarification: only english letters, case sensitive <=50 length, all characters of jewels unique

//i/O: ('aA', 'aAAbbbb') => 3

// Approach: set a counter for matches loop through the jewels and stones for each jewel, add matches to counter, return counter
// O(n^2)
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    for (let i = 0; i < jewels.length; i++){
        let jewel = jewels[i]
        for (let j = 0; j < stones.length; j++){
            let stone = stones[j];
            if (stone === jewel){
                counter++;
            }
        }
    }
    return counter;
};


// one liner still O(n^2?)
const numJewelsInStones2 = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;