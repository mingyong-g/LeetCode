/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 * 
 * @des
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * @demo
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * 
 * @tips
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 * @idea
 * 见注释
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj = {};
  let output = [];

  /** 
   * 将nums1中的元素保存到obj中，并记录相同元素出现的次数
   */
  nums1.forEach((item)=>{
    if(obj[item]){
      obj[item]++;
    }
    else{
      obj[item]=1;
    }
  })

  /** 
   * 遍历nums2中的元素，若已存在obj中，则说明是公共元素
   * 同时使该元素的计数值减一
   */
  nums2.forEach((item)=>{
    if(obj[item]){
      obj[item]--;
      output.push(+item);
    }
  })

  // 不考虑输出顺序
  // return output.sort();
  return output;
};
// @lc code=end
//[4,9,5]
//[9,4,9,8,4]

