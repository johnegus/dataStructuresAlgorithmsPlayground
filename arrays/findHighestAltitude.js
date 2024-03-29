// 1732. Find the Highest Altitude


// Share
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

let gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.


/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = 0;
    let maxPeak = 0
    for (let index = 0; index < gain.length; index++) {
        const currentHeight = gain[index];
        altitude += currentHeight
        if (altitude > maxPeak){
            maxPeak = altitude
        }
        
    }
    return maxPeak
};

console.log(largestAltitude(gain))