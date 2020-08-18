/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 * 
 * @idea 
 * 二分法
 * mid = (right+left)/2
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let mid = parseInt(n/2);
        let left = 1;
        let right = n;
        while(left<right){
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid+1;
            }
            mid = parseInt((right+left)/2);
        }
        return left;
    };
};
// @lc code=end

