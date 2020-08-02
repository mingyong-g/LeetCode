/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 
 * @des 
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 * 
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 * 
 * @demo
 * 输入：19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 * @idea 
 * 结束判断的条件是平方和值为1
 * 或者计算平方和的过程中出现了相同的结果
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  /** 计算当前数每个位置上的平方和 */
  let res = sum(n);
  let set = new Set();

  /*
   * 判断平方和是否为1 
   * 或者平方和结果是否重复出现
   * 若重复出现则说明出现了循环结束while循环
   */
  while (res!=1&&!set.has(res)){
    set.add(res);
    res = sum(res)
  }
  /** 循环结束后判断平方和值是否为1  */
  return res==1;

  function sum(n){
    n=''+n;
    let result = 0;
    for (let num of n) {
      result += num*num;
    }
    return result;
  }
};
// @lc code=end

