// 1266. Minimum Time Visiting All Points

// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

let points = [[1,1],[3,4],[-1,0]]
Output: 7



/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let output = 0;
    for (let index = 1; index < points.length; index++) {
        const array2 = points[index];
        const array1 =points[index-1]
        let x = Math.abs(array2[0] -array1[0])
        let y = Math.abs(array2[1] -array1[1])
        output += Math.max(x, y)
        
    }
    return output
};

console.log(minTimeToVisitAllPoints(points))