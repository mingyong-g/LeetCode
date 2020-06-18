/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 * 
 * @desc 
 * - 给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 * - 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * @demo 
 * -输入: a = "11", b = "1"输出: "100"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a=="0")return b;
  if(b=="0")return a;
  let arr_a = a.split("");
  let arr_b = b.split("");
  let result = [];
  let base = 2,temp=0;
  let num1 = parseInt(arr_a.pop()) ;
  let num2 = parseInt(arr_b.pop()) ;
  let sum = 0;
  while( !Number.isNaN(num1) ||!Number.isNaN(num2)){
    if(!Number.isNaN(num1) &&!Number.isNaN(num2)){
      sum =num1 + num2 + temp;
    }
    else if(!Number.isNaN(num1) &&Number.isNaN(num2)){
      sum = num1 + temp;
    }
    else if(Number.isNaN(num1) &&!Number.isNaN(num2)){
      sum = num2 + temp;
    }
    if(sum>=base){
      result.unshift(sum-base);
      temp = 1;
    }
    else{
      temp = 0;
      result.unshift(sum);
    }
    num1 = parseInt(arr_a.pop());
    num2 = parseInt(arr_b.pop());
  }
  if(temp==1){
    result.unshift(1);
  }
  return result.join("")
};
// @lc code=end

