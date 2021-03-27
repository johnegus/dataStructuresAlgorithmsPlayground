// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

let s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

let s2 = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

let  s3 = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

let  s4 = ""
// Output: 0
let s5 = "dvdf" //3
/**
 * @param {string} s
 * @return {number}
 */
// let lengthOfLongestSubstring = function(string) {
    
//     let answer = 0;
//     let index = new Array(26);

//     for (let i = 0, j=0; j < string.length; j++){
//         if(index[string.charAt(j)]){
//             i = Math.max(index[string.charAt(j)], i);
//         }
//         answer = Math.max(answer, j-i+1);
//         index[string.charAt(j)] = j + 1;

//     }

//     return answer
// };

// let lengthOfLongestSubstring = function(string) {
    
//     let counter = 0;
//     let object = {};
//     let max = 0;

//     for (let i = 0; i < string.length; i++) {
//         const element = string[i];
//         for (let j=0; j < string.length; j++){
//             let letter = string[j]
    
//             if(typeof(object[letter]) !== 'undefined'){
//                 counter = 0
//                 object = {}
//                 break;
//             }
    
//             object[letter] = 0
//             console.log(object)
//             counter ++;
//             if (counter > max){
//                 max = counter
//             }
    
//         }
//     }
    

//     return max
// };

// let lengthOfLongestSubstring = function(string) {
    
//     let counter = 0;
//     let object = {};
//     let max = 0;
//     let stack = ''

//     let recursion = (string, object, counter, max) =>{
//         if (string.length === 0){
//             return max
//         } 

//             if(typeof(object[string[0]]) !== 'undefined'){
//                 counter = 0
//                 object = {}
//                 string = stack.slice(1, stack.length) + string
//                 stack = ''
//             }




//         object[string[0]] = 0
//         string = string.slice(1, string.length)
//         stack += string[0]
//         console.log(stack)
//         counter++;
//         console.log(counter)
//         if (counter > max){
//             max = counter
//         }
//         console.log(object)
//         recursion(string, object, counter, max)

//     }
    

//     recursion(string, object, counter, max)
// };

let lengthOfLongestSubstring = function(string) {
    
    let counter = 0;
   //"pwwkew"
    let max = 0;
    let map = {}

    for (let i = 0; i < string.length; i++) {
        const letter1 = string[i];
        for (let j = i; j < string.length; j++) {
            const letter2 = string[j];
            
            if(typeof(map[letter2]) !== 'undefined'){
                counter = 0;
                map = {}
                break;
                
            }
            map[letter2]++
            console.log(map)
            counter ++;
            if (counter > max){
                max = counter
            }
        }
        
    }
    return max;
};
// some other guys hashing
// var lengthOfLongestSubstring = function(s) {
//     let map = {}
    
//     for (let char of s) {
//         map[char] ? map[char]++ : map[char] = 1
//         console.log(map)
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === 1) return i
//     }
        
//     return -1
// };
console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring(s2))
console.log(lengthOfLongestSubstring(s3))
console.log(lengthOfLongestSubstring(s4))
console.log(lengthOfLongestSubstring(s5))
