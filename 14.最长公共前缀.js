/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0]){
        return '';
    }
    let s1 = strs[0];
    let flag = true;
    strs.forEach((iterm)=>{
       if(!iterm.startsWith(s1)){
        flag = false;
       }
    });
    if(flag){
        return s1;
    }
    else {
        s1=s1.slice(0,-1);
        strs[0]=s1;
        return longestCommonPrefix(strs);
    }

};
// @lc code=end

