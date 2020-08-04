/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 
 * @des
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let obj = {};
  nums.forEach(item=>{
    if(obj[item]==undefined){
      obj[item] = 0;
    }
    else{
      obj[item] = 1;
    }
  })
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if(obj[key]==1) return true;
    }
  }
  return false;

  /**
   * 方法二
   * 直接通过Set去重，如果长度和原数组相等则说明所有元素都不同
   */
  //return new Set(nums).size !== nums.length
};
// @lc code=end

