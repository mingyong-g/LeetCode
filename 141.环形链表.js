/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 
 * @des
 * 合定一个链表,判断链表中是否有环
 * 为了表示给定链表中的环,我们使用整数pos来表示链表尾连接到链表中的位置(索引从0开冶)。如果pos是-1,则在该链表中没有 * 环。
 * 
 * @demo
 * - demo1
 * - 输入：head = [3,2,0,-4],pos=1;
 * - 输出：true
 * 
 * - demo2
 * - 输入: head = [1],pos = -1;
 * - 输出: false
 * 
 * @issue
 * - 链表是否有环，可转换为追及问题
 * - 如果有环，必然发生追及
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head==null||head.next==null) return false;
  let pos_slow = head;
  let pos_fast = head.next;
  while(pos_fast!=null&&pos_fast.next!=null){
    if(pos_fast.val==pos_slow.val) return true;
    pos_fast = pos_fast.next.next;
    pos_slow = pos_slow.next;
  }
   return false
};
// @lc code=end

