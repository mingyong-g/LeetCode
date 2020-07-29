/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 * 
 * @des
 * 给定一个Excel表格中的列名称，返回其相应的列序号
 * 
 * @demo
 *   A -> 1
 *   B -> 2
 *   C -> 3
 * 
 * @issue
 * 将字母进行26进制转换： 26进制->10进制
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let len = s.length;
  let result = 0;
  for(let i=len-1;i>=0;i--){
    result +=  Math.pow(26,len-1-i)*(s[i].charCodeAt()-'A'.charCodeAt()+1); 
  }
  return result;
};
// @lc code=end

