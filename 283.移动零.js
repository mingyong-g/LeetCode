/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 * 
 * @des
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * @demo
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length;
  let tiems = 0;
  for(let i=0;i<len-tiems;i++){
    if(nums[i]==0){
      nums.push(nums.splice(i,1));
      i--;
      tiems++;
    }
  }
};
// @lc code=end

