/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 * 
 * @des
 * 给定一个以按照升序排列的有序数组。找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标index1和index2。其中index1<index2。
 * 
 * @other
 * 返回的下标从1开始
 * 每个输入只对应一个答案，且不能使用相同的元素
 * 
 * @issue
 * - 双指针法
 * 一个从左侧右移，一个从右侧往左移动
 * 因为是升序数组，右移会使得元素变大，左移使得元素变下。
 * 通过双向移动逼近目标值。
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  while(left<right){
    /** 相等找到则推出 */
    if(numbers[left]+numbers[right]==target){
      break;
    }
    /**如果比模板大，则让右侧左移减小（因为是升序数组） */
    else if(numbers[left]+numbers[right]>target){
      right--;
    }
    /**如果比模板小，则让左侧右移增大（因为是升序数组） */
    else if(numbers[left]+numbers[right]<target){
      left++;
    } 
  }
  return [left+1,right+1];

};
// @lc code=end

