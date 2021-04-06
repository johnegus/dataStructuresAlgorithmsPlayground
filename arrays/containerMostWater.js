// 11. Container With Most Water
// Medium

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

 

// Example 1:

let height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:

let height2 = [1,1]
// Output: 1

// Example 3:

let height3 = [4,3,2,1,4]
// Output: 16

// Example 4:

let height4 = [1,2,1]
// Output: 2

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let area = 0
    for (let i = 0; i < height.length; i++) {
        const left = height[i];
        for (let j = height.length -1; j > i; j--) {
            const right = height[j];
            let currentArea = Math.min(left, right) * (j - i)
            if (area < currentArea){
                area = currentArea
            }
            
        }
        
    }
    return area
};

const maxArea = height => {
    let water = 0
    let left = 0
    let right = height.length - 1
    while(left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        water = Math.max(area, water)
        if (height[left] <= height[right]) left++
        else right--
    }
    return water
};

console.log(maxArea(height))
console.log(maxArea(height2))
console.log(maxArea(height3))
console.log(maxArea(height4))