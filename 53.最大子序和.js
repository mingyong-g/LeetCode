/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 * 示例:

 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let len = nums.length,max=0,temp,res=nums[0];

    let index = nums.findIndex((list)=>list>0)

    // if(index==-1){
    //     res = Math.max(...nums);
    // }
    // else{
    //     for(let i=index;i<len;i++){
    //         max += nums[i];
    //         if(max<0){
    //             max=0;
    //             continue;
    //         };
    //         temp = max+nums[i+1];
    //         if(temp<=0){
    //             res = Math.max(res, max);
    //             i++;
    //             max = 0;
    //         }
    //         else if(temp<max){
    //             res = Math.max(res, max);
    //         }
    //         else{
    //             res = Math.max(res, max);
    //         }
    //     }
    // }
    for (const list of nums) {
        if(max>0){
            max+=list;
        }
        else{
            max = list;
        }
        res = Math.max(max,res);
    }
    return res;

};
// @lc code=end

