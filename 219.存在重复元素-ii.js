/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 
 * @des
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j  * 的差的 绝对值 至多为 k。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let obj = {};
  let len = nums.length;
  for (var i = 0; i < len; i++) {
    if(obj[nums[i]]==undefined){
      obj[nums[i]] = i;
    }
    else{
      let temp = i-obj[nums[i]];
      if(temp<=k){
        return true;
      }
      else{
        obj[nums[i]] = i;
      }
    }
  }
  return false;
};
// @lc code=end

