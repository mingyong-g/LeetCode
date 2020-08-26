/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 * 
 * @des
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * @idea
 * 转换为4机制，规则同2的整数幂，3的整数幂
 * 
 * 更多解法参考：
 * @link(https://leetcode-cn.com/problems/power-of-four/solution/4de-mi-by-leetcode/)
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return /^10*$/.test(num.toString(4));
};
// @lc code=end

