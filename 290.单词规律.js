/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 * 
 * @des
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * @demo
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * @idea
 * - 判断相同的单词出现的位置是否相同
 * - 通过第三方映射判断是否相等
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr1 = pattern.split("");
  let arr2 = str.split(" ");
  let len1 = arr1.length;
  let len2 = arr2.length;
  if(len1!=len2) return false;

  // for(let i=0;i<len1;i++){
  //   if(arr1.indexOf(arr1[i],i+1)!=arr2.indexOf(arr2[i],i+1)){
  //     return false;
  //   }
  // }

  // return true;

  return midVar(pattern.split(""))==midVar(str.split(" "))


  /**
   * @description 采用中间变量作映射
   * @param {Array} arr 
   */
  function midVar(arr){
    let len = arr.length;
    let temArr = [];
    let map = new Map();
    for(let i=0;i<len;i++){
      if(map.has(arr[i])){
        temArr.push(map.get(arr[i]))
      }
      else{
        map.set(arr[i],i);
        temArr.push(i)
      }
    }
    return temArr.join("");
  }
    
};
// @lc code=end

