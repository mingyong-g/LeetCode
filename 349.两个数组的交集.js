/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 * 
 * @des
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * @demo
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * @idea
 * 利用 Array 和 Set 间的转换提高性能
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let output = new Set();
  let min_set,max_set;
  let MIN_LEN = 0;
  if(len1<len2){
    MIN_LEN = len1;
    min_set = new Set(nums1);
    max_set = new Set(nums2);
  }else{
    MIN_LEN = len2;
    min_set = new Set(nums2);
    max_set = new Set(nums1);
  }

  for (let item of min_set.values()) {
    if(max_set.has(item)){
      output.add(item);
    }
  }

  return [...output];
};
// @lc code=end

