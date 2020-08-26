/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  /**
   * !方法一：现成方法
   */
  // return s.reverse();

  /**
   * ！方法二：位置交换
   */
  let x = 0, y = s.length - 1;
  while(x < y){
      [s[x], s[y]] = [s[y], s[x]];
      x++,y--;
  }
  return s;

};
// @lc code=end

