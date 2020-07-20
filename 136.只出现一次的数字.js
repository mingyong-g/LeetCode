/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 
 * @des
 * 给定一个非空整数数组,除了某个元素只出现一次以外,其余每
 * 个元素均出现两次。找出那个只出现了一次的元素。
 * 说明:你的算法应该具有线性时间复杂度。你可以不使用额外空间来实现吗?
 * 
 * @demo
 * - 输入:[2,2,1
 * - 输出:1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {};
  nums.forEach(item=>{
    if( obj[item]!=undefined ) obj[item] = 1;
    else obj[item] = 0;
  })
  for (const key in obj) {
    if(obj[key]==0) return key;
  }
};

// @lc code=end

