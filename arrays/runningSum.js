// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


let runningSum = function(nums) {
    let newArray = [];
    let initialValue = 0;
    nums.forEach(element => {
        newArray.push(initialValue + element)
        initialValue = element + initialValue;
    });
    return newArray;
};