/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 
 * @des
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字。忽略大小写
 * 空字符串定义为有效字符串
 * 
 * @demo
 * - 输入 "A man, a plan, a cancal: Panama"
 * - 输出 true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  /** [^\w]匹配非字母非数字但是包含_ */
  let reg = /[^\w]|[_]/g;
  
  /** 得到只含数字和字母的字符串 */
  let s1 = s.replace(reg,"");

  /** 反转字符串 */
  let s2 =  s1.split("").reverse().join("");
  return s1 === s2;
};

// @lc code=end

