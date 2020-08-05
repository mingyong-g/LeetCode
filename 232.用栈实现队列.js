/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 * 
 * @des
 * 使用栈实现队列的下列操作：
 * - push(x) -- 将一个元素放入队列的尾部。
 * - pop() -- 从队列首部移除元素。
 * -peek() -- 返回队列首部的元素。
 * - empty() -- 返回队列是否为空。
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queen = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queen.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   let arr = [];
   let len = this.queen.length;
   for(let i=0;i<len;i++){
     arr.push(this.queen.pop());
   }
   let result = arr.pop();
   for(let i=0;i<len-1;i++){
    this.queen.push(arr.pop());
  }
  return result
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  let arr = [];
  let len = this.queen.length;
  for(let i=0;i<len;i++){
    arr.push(this.queen.pop());
  }
  let result = arr.pop();
  arr.push(result);
  for(let i=0;i<len;i++){
   this.queen.push(arr.pop());
 }
 return result
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queen.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

