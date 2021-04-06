// 56. Merge Intervals
// Medium

// Share
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

let intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

let intervals2 = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
let intervals3 = [[1,4],[0,4]]
// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
     let newArray = []
     for (let index = 1; index < intervals.length; index++) {
         const element = intervals[index];

         if (intervals[index][0] <= intervals[index-1][1]){
            newArray.push([intervals[index-1][0], intervals[index][1]])
         } else {
             newArray.push(element)
         }
         
     }
    return newArray
};

// var merge = function(intervals) {
//     if (intervals.length <= 1){
//         return intervals;
//     }
//     intervals.sort(([a], [b]) => a - b);
//     let newArray = [];
//     let currentInterval = intervals[0];
//     newArray.push(currentInterval);
//     for (let index = 1; index < intervals.length; index++) {
//         const element = intervals[index];
//         let currentBegin = currentInterval[0];
//         let currentEnd = currentInterval[1];
//         let nextBegin = element[0];
//         let nextEnd = element[1]

//         if (currentEnd >= nextBegin){
//             currentInterval[1] = Math.max(currentBegin, nextEnd)
//         } else {
//             currentInterval = element
//             newArray.push(currentInterval)
//         }

        
//     }
//    return newArray
// };

function merge(intervals) {
    intervals.sort(([a], [b]) => a - b);
    const merged = [];
    let [opening, closing] = intervals[0];
    for (const [start, end] of intervals) {
        if (start > closing) {
            merged.push([opening, closing]);
            opening = start;
        }
        closing = Math.max(closing, end);
    }
    merged.push([opening, closing]);
    return merged;
}
console.log(merge(intervals))
console.log(merge(intervals2))
console.log(merge(intervals3))
console.log(merge([[1,4],[2,3]]))