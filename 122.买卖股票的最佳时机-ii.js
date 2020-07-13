 /*
 * @lc app=leetcode.cn id=122 lang=javascript
 * 
 * @des
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * @demo
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 
 * 
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

/* **********************
 * 我的思路：
 * 找到最小的股票点买入，第一次达到最高后卖出
 * 判断最高：后一天收益比当天收益低
 * 卖出后随即买入，继续计算收益，达到最高后再次卖出
 * 最终将所有收益相加
 ********************** */ 
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  let result = 0;
  for (var i = 0; i < prices.length; i++) {
    if(prices[i]<min) min = prices[i];
    else if(prices[i+1]>prices[i]){
      max = Math.max(max,prices[i+1]-min)
    }
    else{
      max = Math.max(max,prices[i]-min);
      min = prices[i+1];
      result += max;
      max = 0;
    }
  }
  return result + max;
};


/* **********************************
 * 大佬的解法：
 * 第一天即买入，
 * 只有上涨则前后两天的差价即是收益。
 * 只要下跌就停止计算收益，
 * 只要上涨继续计算前后两天的收益差 
 ************************************/
// var maxProfit = function(prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
//   }
//   return profit;
// };

/* ********************************** 
 *  作者：chitanda-eru
 *   链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/* * *    yu-zhi-wei-lai-zhe-mai-mai-gu-piao-de-si-lu-by-hut/
 *   来源：力扣（LeetCode）
 *   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 ***********************************/
// @lc code=end

