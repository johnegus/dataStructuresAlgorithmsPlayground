// 1370. Increasing Decreasing String
// Easy

// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

let s = "rat"  //art
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"


/**
 * @param {string} s
 * @return {string}
 */
// let sortString = function(string) {
//     let array = string.split("");
//     let newArray = []
    

    
//     //first forward pass
//     function recursive(array){
    
//         while(array.length > 0){
//             let min = ''
//             let max = 'z'
//     for (let index = 0; index < array.length; index++) {
//         let miniArray = []
//         let element = array[index];
//         if (element > min){
//             array.splice(index,1);
//             miniArray.push(element)
//             min = element
//             console.log(array)
//             // console.log(newArray.join(''))
//             console.log(array.length)
//             miniArray.sort()
//             newArray.push(miniArray)
//         }  
        
        
//     }
    
//     //first backward pass
//     for (let index = array.length-1; index > 0; index--) {
//         let miniArray = []
//         let element = array[index];
//         if (element < max){
//             array.splice(index,1);
//             miniArray.push(element)            
//             max = element
//             console.log(array)
//             // console.log(newArray.join(''))
//             console.log(array.length)
//             miniArray.sort()
//             newArray.push(miniArray)
            
            
//         } 
          
//     }
  
   
// recursive(array)


// }
//     }
//     recursive(array)
//     return newArray.join(''); 
// }


const sortString = string => {
    const count = new Array(26).fill(0);
    console.log(count)
    for (let i = 0; i < string.length; i++) count[string.charCodeAt(i) - 97]++;
    const res = new Array(Math.max(...count)).fill('');
    for (let i = 0; i < 26; i++)
      for (let j = 0; j < count[i]; j++)
        if (0 === j % 2) res[j] += String.fromCharCode(i + 97);
        else res[j] = String.fromCharCode(i + 97) + res[j];
    return res.join('');
  };

console.log(sortString(s))