/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 * 
 * @des 
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * @demo
 * 输入："hello"
 * 输出："holle"
 * 
 * @idea
 * ！！！ 不能直接通过索引交换字符串字符位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split("");
  let target = {
    "a": 1,
    "A": 1,
    "e": 1,
    "E": 1,
    "i": 1,
    "I": 1,
    "o": 1,
    "O": 1,
    "u": 1,
    "U": 1
  };
  let output = "";
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (target[s[left]] && target[s[right]]) {
      [arr[left],arr[right]] = [arr[right],arr[left]];
      left++;
      right--;

    } else if (target[s[left]]) {
      arr[right] = s[right];
      right--;
    } else if (target[s[right]]) {
      arr[left] = s[left];
      left++;
    } else {
      arr[left] = s[left];
      arr[right] = s[right];
      left++;
      right--;
    }
  }
  return arr.join("");
};


// @lc code=end