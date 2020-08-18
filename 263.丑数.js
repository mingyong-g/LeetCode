/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 * 
 * @demo
 * 编写一个程序判断给定的数是否为丑数。
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 *
 * @demo
 * 输入: 6
 * 输出: true
 * 解释: 6 = 2 × 3
 * 
 * @idea
 * - 负数均为false
 * - 如果不能同时被2/3/5整除说明不是丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if(num<1) return false;
  while(num>1){
    if(num%2&&num%3&&num%5){
      return false;
    }
    if(num%2==0){
      num=num/2;
    }
    if(num%3==0){
      num=num/3;
    }
    if(num%5==0){
      num=num/5;
    }
  }
  return num==1;
};
// @lc code=end

