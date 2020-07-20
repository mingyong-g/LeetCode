/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 * 
 * @des 
 * 设计一个支持push,pop,top操作,并能在常数
 * 时间内检索到最小元素的栈。
 * ●push(x) --- 将元素ⅹ推入栈中。
 * ●pop()   --- 删除栈顶的元素。
 * ●top()   --- 获取栈顶元素。
 * ●getHin()--- 检索栈中的最小元素。
 * 
 * @issue
 * - 建立一个辅助栈同步保存栈内元素所对应的最小值
 * 
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min_stack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  let min = this.getMin();
  x<min?this.min_stack.push(x):this.min_stack.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

