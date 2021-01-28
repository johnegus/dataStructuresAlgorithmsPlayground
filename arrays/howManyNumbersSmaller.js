// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.




/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function(nums) {
    let newArray = [];
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        for (let j = 0; j < nums.length; j++) {
            const checked =nums[j]
            
            if (checked < element){
                counter++
            }
            
                
        }
        newArray.push(counter)
        counter = 0
    }
    return newArray;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))