
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).
nums1 = [1,3], nums2 = [2,4]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

    




var findMedianSortedArrays = function(leftArray, rightArray) {
    const sorted = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
      const leftItem = leftArray[0];
      const rightItem = rightArray[0];
  
      if (leftItem > rightItem) {
        sorted.push(rightItem);
        rightArray.shift();
      } else {
        sorted.push(leftItem);
        leftArray.shift();
      }
    }
  
    while (leftArray.length !== 0) {
      const value = leftArray.shift();
      sorted.push(value);
    }
  
    while (rightArray.length !== 0) {
      const value = rightArray.shift();
      sorted.push(value);
    }
    if (sorted.length % 2 == 0){
      return (sorted[Math.floor(sorted.length/2)] + sorted[Math.floor(sorted.length/2 - 1)]) / 2
    } else {
      return sorted[Math.floor(sorted.length/2)]
    }
  }
  
  console.log(findMedianSortedArrays(nums1, nums2))
  // function mergeSort(array) {
  //   const length = array.length;
  //   if (length == 1) {
  //     return array;
  //   }
  
  //   const middleIndex = Math.ceil(length / 2);
  //   let leftArray = array.slice(0, middleIndex);
  //   let rightArray = array.slice(middleIndex, length);
  
  //   leftArray = mergeSort(leftArray);
  //   rightArray = mergeSort(rightArray);
  
  //   return merge(leftArray, rightArray);
  // }


  // console.log(merge(['apple', 'tree', 'octopus'], ['diamond', 'cow', 'baby']));
  // console.log(merge([2, 3, 88], [17, 1, 10]));
  // console.log(merge([2, 3, 88], [17, 1, 10]));