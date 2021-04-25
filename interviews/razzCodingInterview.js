// Write a function that given a string, returns a boolean if it is the same read from the left or right
// i.e - racecar
let checkPalindrome = function(string) {
    let length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string.charAt(i) !== string.charAt(length -1 - i)){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('racecar'))


// * Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"]


// let leastFrequent = function(array) {
//     array.sort()
//     let res =[]
//     let unique = [...new Set(array)];
//     console.log(unique)
//     let least = array.length + 1;
//     let currentCount = 1
//     for (let i = 1; i < array.length; i++) {
      
//         if(array[i] == array[i - 1]){
//             currentCount = currentCount + 1
//         } else {
//             if (currentCount < least){
            
//             least = currentCount;
//             res.push(array[i - 1])
//             } 
//             currentCount = 1
//         }
//         if (currentCount = least){
//             least = currentCount
//             res.push(array[i]);
//         } 
//     }
    
//     return res
// }

let leastFrequent = function(array){
    let newSet = [...new Set(array)];
    console.log(newSet)
    let count = 0;
    let numSet = []
    let finalArray = []

    for (let index = 0; index < newSet.length; index++) {
        for (let j = 0; j < array.length; j++) {
            const origElement = array[j];
            if (origElement === newSet[index])
                count++;
            
        }
        numSet.push(count)
        count = 0
    }
    console.log(numSet)
    let mathMin = Math.min(...numSet)
    console.log(mathMin)

    for (let k = 0; k < numSet.length; k++) {
        const numElement = numSet[k];
        if (numElement == mathMin){
            min = numElement
            finalArray.push(newSet[k])
        } 
        

        
    } 

    return finalArray
}

console.log(leastFrequent(["Argentina", "Cuba", "Chile", "Argentina"] ))

// const arrToInstanceCountObj = arr => arr.reduce((obj, e) => {
//     let newArray = []
//     obj[e] = (obj[e] || 0) + 1;
//     for (let [key, value] of Object.entries(obj)){
//         console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
//     }
//     return obj;
//   }, {});



// console.log(arrToInstanceCountObj(["Argentina", "Cuba", "Chile", "Argentina"]))

// * Write a function that given a list of strings, returns the list sorted based on the length of each string
// i.e - ["programming", "simply", "rocks"] ->
//   ["rocks", "simply", "programming"]
  
 let sorter = function(array) {
     return array.sort((x,y) => x.length - y.length)
 }

 console.log(sorter(["programming", "simply", "rocks"]))