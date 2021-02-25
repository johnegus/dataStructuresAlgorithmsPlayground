// 140. Word Break II
// Hard

// 2905

// 441

// Add to List

// Share
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
let s = "catsanddog"
let wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//     let table = new Array(s.length + 1).fill(false);
//     table[0] = true;
    
//     for(let i = 0; i< table.length; i++){
//         if(table[i] === false) continue;
        
//         for(let j = i + 1; j <table.length; j++){
//             let word = s.slice(i,j);
//             if (wordDict.includes(word)){
//                 table[j] = true
//             }
//         }
//     }
//     let newString = [];
// console.log(table)
    
//         for (let j = 0; j < s.length; j++) {
//             const letter = s[j];
//             console.log("letter: " + letter)
//             if(table[j] === true && j !== 0){
//                 newString.push(' ')
//                 console.log("New string: " + newString)
                
//             } else {
//                 newString.push(letter)
//                 console.log("New string: " + newString)
                
//             }
            
//         }
    
//     return newString.join('')

// };

var wordBreak = function(s, wordDict) {
    const memo = new Map();
    
    function run(str) {
        if(memo.has(str)) return memo.get(str);
        if(!str.length) return [];
        
        const result = [];
        
        for(let word of wordDict) {
            console.log(memo)
            // find words in the dict that match the start of str
            if(str.startsWith(word)) {
                // remove the current word from the start of the str
                const next = str.slice(word.length);
                const paths = run(next); 
                
                // if 'paths' is empty arr, and 'next' is empty str
                // current word will be the last one in the sequence
                if(!paths.length && !next.length) result.push(word);
                
                // else map the current word to the start of every path
                // and push each path to result
                result.push(...paths.map(rest => word + ' ' + rest));
            }
        }
        // cache result
        memo.set(str, result);
        return result;
    }
    return run(s);
};
console.log(wordBreak(s, wordDict))