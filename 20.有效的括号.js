/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * first commit
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

