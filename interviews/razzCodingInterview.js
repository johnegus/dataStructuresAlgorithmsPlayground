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
    array.sort()
    console.log(array)
    let res =[]
    let least = array.length + 1;
    let currentCount = 1
    for (let i = 1; i < array.length; i++) {
        if(array[i] == array[i - 1]){
            currentCount = currentCount + 1
        } else {
            if (currentCount < least){
            least = currentCount + 1;
            res.pop()
            res.push(array[i - 1])
            } 
            currentCount = 1
        }
       
    }
    if (currentCount < least){
        least = currentCount;
        res.push(array[array.length -1])
    } 
    return res
}

console.log(leastFrequent(["Argentina", "Cuba", "Chile", "Argentina", "Cuba", "Chile"]))



// * Write a function that given a list of strings, returns the list sorted based on the length of each string
// i.e - ["programming", "simply", "rocks"] ->
//   ["rocks", "simply", "programming"]
  
 let sorter = function(array) {
     return array.sort((x,y) => x.length - y.length)
 }

 console.log(sorter(["programming", "simply", "rocks"]))