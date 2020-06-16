/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 
 * @desc 
 * - 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * - 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * - 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * @demo 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  /** 数值较大时溢出  */
  // let num = digits.join("");
  // num = Number(num)+1;
  // return `${num}`.split("");

  /** 方法二 */
  let len = digits.length;
  for(let i=len-1;i>-1;i--){
    if( digits[i]<9 ){
      digits[i] += 1;
      break;
    }else{
      digits[i]=0;
      if(i===0){
        digits.unshift(1);
      }
    }
  }
  return digits;
};
// @lc code=end

