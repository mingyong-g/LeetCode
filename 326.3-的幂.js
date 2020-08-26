/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 * 
 * @des
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * @demo
 * 输入: 27
 * 输出: true
 * 
 * @idea 
 * 转换成3进制表示，若是3的整数次幂则必为100/1000/10000的格式
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return /^10*$/.test(n.toString(3));
};
// @lc code=end

