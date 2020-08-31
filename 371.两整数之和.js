/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 * 
 * @des
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 * 
 * @idea
 * 两个二进制数相加，^运算的结果是不考虑进位时的结果
 * 两个二进制数相加，&运算的结果是对应为是否有进位，如果结果出现1的话，则左移（<<）1位后和^运算的结果继续做加法，直到&运算的结果为0，此时&运算的结果就是两个数的和
 *
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  return (a&b)?getSum(a^b,(a&b)<<1):a^b
};
// @lc code=end

