/*
 * @Author: mingyong.g
 * @Date: 2020-07-09 22:40:01
 * @LastEditors: mingyong.g
 * @LastEditTime: 2020-07-09 23:02:54
 * @Description: 
 * @FilePath: \LeetCode\119.杨辉三角-ii.js
 */ 
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let  arr =[[1]];
  if(rowIndex<0||rowIndex>33) return[];

  for (var i = 1; i <= rowIndex; i++) {
    arr[i]=[1];
    for(let j=1;j<i;j++){
      arr[i][j]= arr[i-1][j-1]+arr[i-1][j]
    }
    arr[i].push(1);
  }
  return arr[rowIndex];
};
// @lc code=end

