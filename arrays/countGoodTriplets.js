// 1534. Count Good Triplets
// Easy

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

// let array = [3,0,1,1,9,7], a = 7, b = 2, c = 3

let array =[1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].


var countGoodTriplets = function(array, a, b, c) {
    count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = i+1; j < array.length; j++) {
            const element2 = array[j];
            for (let k = j+1; k < array.length; k++) {
                const element3 = array[k];
                if (Math.abs(element - element2) <= a && Math.abs(element2 - element3) <= b && Math.abs(element - element3) <= c){
                    count++;
                }
                
                
            }
        }
        
    }
    return count;
};

console.log(countGoodTriplets(array, a, b, c))