/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target);
  if(index !== -1) return index;
  index = nums.findIndex(function(item){
      return item>=target;
  });
  if(index!==-1) {
    return index;
  }
  else if(nums[0]>target)
  {
    return 0;
  } 
  else {
    return nums.length;
  }
};
// @lc code=end

