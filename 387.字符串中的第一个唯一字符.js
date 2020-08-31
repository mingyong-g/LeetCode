/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 * 
 * @des
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * @demo
 * s = "leetcode" 
 * 返回 0
 *
 * s = "loveleetcode"
 *　返回 2
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  let set = new Set();
  for(let i=0;i<s.length;i++){
    if(s.indexOf(s[i],i+1)==-1 && !set.has(s[i])) return i;
    else{
      set.add(s[i])
    }
  }
  return -1;
};
// @lc code=end

