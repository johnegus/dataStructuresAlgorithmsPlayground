// 48. Rotate Image
// Medium

// Share
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  var rotate = function(matrix) {
//     let newArray = [0,0,0,0,0,0,0,0,0]

//     for (let i = 0; i < matrix.length; i++) {
//         const array = matrix[i];
//         for (let j = 0; j < array.length; j++) {
//             const number = array[j];
//             //first array
//             if (i === 0 && j === 0){
//                 newArray[2] = number
//             }
//             if (i === 0 && j === 1){
//                 newArray[5] = number
//             }
//             if (i === 0 && j === 2){
//                 newArray[8] = number
//             }
//             //second array
//             if (i === 1 && j === 0){
//                 newArray[1] = number
//             }
//             if (i === 1 && j === 1){
//                 newArray[4] = number
//             }
//             if (i === 1 && j === 2){
//                 newArray[7] = number
//             }
//             //third
//             if (i === 2 && j === 0){
//                 newArray[0] = number
//             }
//             if (i === 2 && j === 1){
//                 newArray[3] = number
//             }
//             if (i === 2 && j === 2){
//                 newArray[6] = number
//             }
//         }
        
//     }
//     let a = newArray.splice(0,3)
//     let b = newArray.splice(0,3)
//     let c = newArray.splice(0,3)
//     return [a,b,c]
// };

var rotate = function(matrix) {
    let n = matrix.length
    console.log(matrix)
  // swap rows to columns
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
    }
}
console.log(matrix)

    //horizontal flip
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n -1 -j];
            matrix[i][n -1 -j] = temp
    }
}
console.log(matrix)
    return matrix
};
console.log(rotate(matrix))