/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 * 
 * @des 
 * 给定一个正整数，返回它在excel表中对应的列名称
 * 
 * @demo
 * 1->A
 * 2->B
 * 26->Z
 * 27->AA
 * 28->AB
 * 701->ZY
 * 
 * @issue
 * 将目标数转换为26进制，每一位代表一个字母
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let output = "";
  const map = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  while(n>26){
    let index = n%26;
    if(index==0) {
      index = 26;
      n--;
    }
    output += map[index-1];
    n = parseInt(n/26);
  }
  output += map[n-1];
  return output.split("").reverse().join("");
}
// @lc code=end

