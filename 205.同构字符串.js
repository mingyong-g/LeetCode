/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 * 
 * @des 
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 *
 * @demo
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length!=t.length) return false;
  if(s==t) return true;
  let len = s.length;
  for(let i=0;i<len-1;i++){
    if(s.indexOf(s[i],i+1)!==t.indexOf(t[i],i+1)){
      return false;
    }
  }
  return true;
};
// @lc code=end

