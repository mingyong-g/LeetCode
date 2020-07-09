/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 * 
 * @des
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * @demo
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if(numRows<1) return [];

  let arr = [[1]];
  for (var i = 1; i < numRows; i++) {
    arr[i]=[1];
    for(let j=1;j<i;j++){
      arr[i][j]= arr[i-1][j-1]+arr[i-1][j]
    }
    arr[i].push(1);
  }
  return arr;

};
// @lc code=end

