/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 * 
 * @des
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房屋内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房间装有互相连通的防盗系统。即不能
 * 连续盗窃相邻的两间房。
 * 
 * 给定一个代表每间房屋存放金额的数组，计算在不触发警报的情况下能够
 * 窃取的最高金额
 * 
 * @demo
 * 输入： [1,2,3,1]
 * 输出： 4
 * 解析： 偷窃第一间和第三间房
 * 
 * @issue 
 * 动态规划--偷还是不偷
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums==null||nums.length==0){
    return 0;
  }
  let len = nums.length;
  if(len==1){
    return nums[0];
  }
  let first = nums[0];
  let second = Math.max(nums[0],nums[1]);
  for(let i = 2;i<len; i++){
    let temp = second;
    second = Math.max(first+nums[i],second);
    first = temp;
  }
  return second;
};
// @lc code=end

