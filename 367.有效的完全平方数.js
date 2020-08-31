/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 * 
 * @des
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt
 * 
 * @idea
 * @link[https://leetcode-cn.com/problems/valid-perfect-square/solution/you-xiao-de-wan-quan-ping-fang-shu-by-leetcode/]
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

 /* *************************
  * 暴力求解
  **************************/
// var isPerfectSquare = function(num) {
//   if(num===1)return true;
//   let n = 2;
//   while(n**2<num){
//     n++;
//   }
//   return n**2===num;
// };

/* ****************************** 
 * 牛顿迭代法
 *******************************/
var isPerfectSquare = function(num) {
  if(num===1) return true;

  let half = num/2;
  while(half**2>num){
    half = (half + num/half)/2;
  }

  return half**2 === num;
}

// @lc code=end

