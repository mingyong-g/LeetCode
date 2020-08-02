/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 * 
 * @des
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 * 
 * @demo
 * 输入：00000000000000000000000000001011
 * 输出：3
 * 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
 * 
 * @idea
 * - 循环字符串，统计1出现的次数
 * - 位操作技巧 n&(n-1)总能使得n的最后一个1变成0
 * 
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  while(n!=0){
    result ++;
    n = n&(n-1);
  }
  return result; 
};
// @lc code=end

