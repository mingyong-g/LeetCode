/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 * 
 * @des 
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * @demo
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(head==null) return head;
  let cur = head;
  while(cur!=null){

    /** 如果是head.val相等的话需要调整head */
    if(head.val==val){
      head = head.next;
      cur=cur.next;
    }
    else if(cur.next!=null&&cur.next.val==val){
      cur.next = cur.next.next;
    }
    else{
     cur = cur.next;
    }
  }
  return head
};
// @lc code=end

