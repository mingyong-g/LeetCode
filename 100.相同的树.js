 /*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 * 
 * @des 
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * @demo
 * 输入:     1         1
 *         / \       / \
 *        2   3     2   3
 *
 *       [1,2,3],   [1,2,3]
 * 输出: true
 * 
 */

// @lc code=start

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p==null&&q==null) return true;

  /** 等价写法 */
  // if((p==null&&q!=null)||(p!=null&&q==null)) return false;
  if(p==null||q==null) return false;

  if(p.val!=q.val) return false;

  /** 【digui】左侧和左侧比较，右侧和右侧比较 */
  return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
};
// @lc code=end

