/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 * 
 * @des
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 *
 * @demo 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let len_note = ransomNote.length;
  let len_maga = magazine.length;
  if(len_note>len_maga) return false;

  let obj = {};
  for (var i = 0; i < len_maga; i++) {
    if(obj[magazine[i]]){
      obj[magazine[i]]++;
    }else{
      obj[magazine[i]]=1;
    }
  }

  for(var i=0;i<len_note;i++){
    if(obj[ransomNote[i]]>0){
      obj[ransomNote[i]]--;
    }else{
      return false;
    }
  }
  return true;
};
// @lc code=end

