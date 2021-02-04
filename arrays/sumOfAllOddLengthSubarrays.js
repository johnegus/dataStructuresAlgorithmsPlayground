// 1588. Sum of All Odd Length Subarrays
// Easy


// Share
// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

let array = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58


/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumOddLengthSubarrays = function(array) {
//     let sum = 0;
//     let oddArray = [];
//     for (let index = 1; index < array.length; index+=2) {
//         sum += slidingWindow(array, index)
        
//     }

//     return sum
// };

// var slidingWindow = function(array, windowSize){
//     let reserve = 0;
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (index < windowSize){
//             sum += array[index]
//         } else {
//             reserve += sum;
//             sum -= array[index - windowSize]
//             sum += array[index]
//         }  
//     }
//     reserve += sum;
//     return reserve;
// }

let sumOddLengthSubarrays = function(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if((i - j) % 2 === 0){
                for (let k = i; k <= j; k++) {
                    count += array[k]
                    
                }
            }
            
        }
    }
    return count;
}

// var sumOddLengthSubarrays = function(arr) {
    
//     let count=0;
    
//     for(let i=0;i<arr.length;i++){ // helping in selecting the starting point
        
//         for(let j=i;j<arr.length;j++){  // helping in selecting the endpoint point
		
//             if((i-j)%2==0){  // so that it only count the subarrays which have odd length
			
// 				for(let k=i;k<=j;k++){ // looping from start point to end point and adding them
// 					count+=arr[k];
// 				}
//             }
//         }
//     }
//     return count;
// };

console.log(sumOddLengthSubarrays(array))