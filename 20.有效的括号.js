/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * first commit
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：
 *
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2.左括号必须以正确的顺序闭合。
 * 3.注意空字符串可被认为是有效字符串。
 *
 * 示例 1:

 * 输入: "()"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;
    
    if(s==""){
        return true;
    }
    else if(len%2!=0||len<2){
        return false;
    }
    let arr = [s[0]];
    for(let i = 1;i<len;i++){
        if(match(arr[arr.length-1],s[i])){
            arr.pop();
        }
        else{
            arr.push(s[i]);
        }
    }
    return arr.length==0;
    function match(s1,s2){
        let res = false;
        if(s1=='('&&s2==')'){
            res = true;
        }
        else if(s1=='{'&&s2=='}'){
            res = true;
        }
        else if(s1=='['&&s2==']'){
            res = true;
        }
        return res;
    }
};
// @lc code=end

