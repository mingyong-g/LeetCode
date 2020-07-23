/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//    while(headA){
//      headA.tag = 1;
//      headA = headA.next;
//    }
//    while(headB){
//     if(headB.tag&&headB.tag==1){
//       return headB;
//     }
//     headB = headB.next;
//    }
//    return null;
// };
/**
 * @alias https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/javascriptxiang-jiao-lian-biao-tu-jie-shuang-zhi-z/
 */
var getIntersectionNode = function(headA,headB){
  let pa = headA;
  let pb = headB;
  while(pa!=pb){
    pa = pa==null?headB:pa.next;
    pb = pb==null?headA:pb.next;
  }
  return pa;
}
// @lc code=end


let re = getIntersectionNode([1,2,3,4],[5,2,3,4])
console.log(re);