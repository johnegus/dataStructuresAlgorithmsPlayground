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
let leastFrequent = function(array) {
    let count = 0
    let least = 99999999999;
    let minItem;
    for(let i=0; i <array.length; i++) {
        for(let j=i; j<array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
            
            if (least >= count) {
                least = count;
                
                minItem = (array[i])
            }
        count = 0;
    }
    return minItem;
}

console.log(leastFrequent(["Argentina", "Cuba", "Chile", "Argentina"]))



// * Write a function that given a list of strings, returns the list sorted based on the length of each string
// i.e - ["programming", "simply", "rocks"] ->
//   ["rocks", "simply", "programming"]
  
 let sorter = function(array) {
     return array.sort((x,y) => x.length - y.length)
 }

 console.log(sorter(["programming", "simply", "rocks"]))