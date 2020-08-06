/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 
 * @des
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * @idea 
 * 1. 判断两个字符串中相同的字符出现的次数是否相同
 * 2. 排序后排队是否相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length!=t.length) return false;
  if(s==t)return true;
  let len = s.length;
  let obj1 = {};
  let obj2 = {};
  for (var i = 0; i < len; i++) {
    if(obj1[s[i]]==null){
      obj1[s[i]] = 0;
    }
    else{
      obj1[s[i]]++;
    }
    if(obj2[t[i]]==null){
      obj2[t[i]] = 0;
    }
    else{
      obj2[t[i]]++;
    }
  }
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if(obj1[key]!=obj2[key]){
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

