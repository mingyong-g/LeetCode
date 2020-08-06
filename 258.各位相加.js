/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 * 
 * @des
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 * 
 * @demo
 * 输入: 38
 * 输出: 2 
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 * 
 * @idea
 * link:[https://leetcode-cn.com/problems/add-digits/solution/java-o1jie-fa-de-ge-ren-li-jie-by-liveforexperienc/]
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return (num - 1) % 9 + 1
};
// @lc code=end