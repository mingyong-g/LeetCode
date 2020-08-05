/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 * 
 * @des
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * @idea
 * n&(n-1)总能使n的最后一位（二进制）置为0
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n<1) return false;
  return (n&(n-1))==0;
};
// @lc code=end

