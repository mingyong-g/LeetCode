/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let  arr = [];
  if(head==null||head.next==null) return true;
  while(head){
    arr.push(head.val)
    head = head.next;
  }
  let left = 0;
  let right = arr.length-1;
  while(left<right){
    if(arr[left]!=arr[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end

