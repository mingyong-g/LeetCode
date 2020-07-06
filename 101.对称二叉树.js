/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  /** 第一层判断是否存在左右子树，并判断左右子树是否相等 */
  if (root==null) return true;
  if(root.left==null&&root.right==null) return true;
  if(root.left==null||root.right==null) return false;
  return symmetric(root.left,root.right)

  /**
   *
   * @description 比较左右子树
   * @param { TreeNode } t1 左子树
   * @param { TreeNode } t2 右子树
   * @returns
   */
  function symmetric(t1,t2){
    /** 【对称情形一】 左右两边均为子树 */
    if(t1==null && t2==null) return true;

    /** 一侧有子树，另一侧没有 【不对称】 */
    if(t1==null || t2==null) return false;

    /** 左右值不相等 【不对称】 */
    if(t1.val!=t2.val) return false;

    /** 【递归】 左树的右子树同右树的左子树比较；左树的左子树同右树的右子树比较 */
    return symmetric(t1.left,t2.right)&&symmetric(t1.right,t2.left);
  }
  
};
// @lc code=end

