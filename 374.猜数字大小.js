/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 * 
 * @des
 * 每轮游戏，系统都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
 * 如果你猜错了，系统会告诉你，你猜测的数字比系统选出的数字是大了还是小了。
 * 
 * @tips
 * 你可以通过调用一个预先定义好的接口 guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：
 * -1 : 你猜测的数字比系统选出的数字大
 * 1 : 你猜测的数字比系统选出的数字小
 * 0 : 恭喜！你猜对了！
 * 
 * @idea
 * 二分法
 * - 二分法中间值 half = (left + right)/2 (有时需要取整)
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;
  let half = Math.floor((right+left)/2);
  while(left<=right){
    half = Math.floor((right+left)/2);
    if(guess(half)===0){
      return half
    }
    if(guess(half)==-1){
      right = half-1;
    }
    if(guess(half)===1){
      left = half+1;
    }
  }
};
// @lc code=end

