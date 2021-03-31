// 238. Product of Array Except Self
// Medium

// Share
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

// Example 1:

let nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

let nums2 = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let nums3 = [0,0]
//[0,0]

let nums4 = [1,0]
let nums5 = [1,1]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let object = {};
    let multi = 1
    let newArray = []
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (num === 0){
            continue;
        }
        multi *= num
        object[num] = multi
        
    }
    console.log(object)
    if (nums.indexOf(0) !== nums.lastIndexOf(0)){
        for (let index = 0; index < nums.length; index++) {
            newArray.push(0)
            
        }
    }
    else if (nums.indexOf(0) !== -1){
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            if (index === nums.indexOf(0)){
                if ( object[nums[nums.length - 1]] !== undefined){
                    newArray.push(object[nums[nums.length - 1]])
                } else {
                    newArray.push(object[Object.keys(object)[Object.keys(object).length - 1]])
                }
                
            } else{
                newArray.push(0)
            }
            
        }
    } else{
        for (let key in object) {
            newArray.push(object[nums[nums.length - 1]]/ key)
        }
    }
  
   
    return newArray
};

var productExceptSelf = function(nums) {
    let output = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i=nums.length - 1; i >= 0; i--) {
        output[i] = rightMult;
        rightMult *= nums[i];
    }
    for (let j=0; j < nums.length; j++) {
        output[j] *= leftMult;
        leftMult *= nums[j];
    }
    return output;
};

console.log(productExceptSelf(nums))
console.log(productExceptSelf(nums2))
console.log(productExceptSelf(nums3))
console.log(productExceptSelf(nums4))
console.log(productExceptSelf(nums5))