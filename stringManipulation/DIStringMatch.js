// 942. DI String Match
// Easy


// Share
// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

let input = "IDID"
// Output: [0,4,1,3,2]

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(string) {
    let newArray = []
    let low = 0
    let high = string.length

    for (let index = 0; index <= string.length; index++) {
        
        if (string.charAt(index) === "I"){
            newArray.push(low++)
            console.log(low)
        }else{
            newArray.push(high--)
            console.log(high)
        }
        
    }
    return newArray
};

// var diStringMatch = function(S) {
//     let res = [],low=0,high=S.length
//     for(let i=0;i<=S.length;i++){
//         if(S.charAt(i) == 'I'){
//             res.push(low++)
//         }else{
//             res.push(high--)
//         }
//     }
//     return res
// };

console.log(diStringMatch(input))