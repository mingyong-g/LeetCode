/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 * 
 * @desc
 * - 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * @demo
 * - 输入: 1->1->2
 * - 输出: 1->2
 * 
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head&&head.next){
    let next = head.next;
    if(head.val===next.val){
      head.next = next.next;
      deleteDuplicates(head);
    }
    deleteDuplicates(head.next);
  }
  return head;
};
// @lc code=end

