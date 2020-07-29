/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 * 
 * @des
 * 给定一个大小为n的数组，找到其中的多数元素。多数元素是指在数组中
 * 出现次数大于n/2的元素。
 * 
 * @demo
 * - 输入[3,2,3]
 * - 输出3
 * 
 * @issue
 * 计数排序思想
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let len = nums.length;
  let targetlen = Math.ceil(len/2);
  let obj = {};
  for(let i=0;i<len;i++){
    if(obj[nums[i]]>=1){
      obj[nums[i]]++;
    }
    else{
      obj[nums[i]]=1;
    }
  }
  // console.log(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
     if(obj[key]>=targetlen){
       return +key;
     }
    }
  }
};

// @lc code=end

