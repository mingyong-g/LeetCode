/* 
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 * 
 * @des
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * @demo
 * 给定二叉树 [3,9,20,null,null,15,7]，返回它的最大深度 3 。
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  if(root == null) return 0;

  let len = 1;
  return deepLength(root.left,root.right,len);

  /**
   * @summary 利用闭包保存树的最大深度
   * @description 判断左右子树那个更长
   * @param { TreeNode } left 左子树
   * @param { TreeNode } right 右子树
   * @param { Number } len 前一个节点已经累计的深度
   * @returns { Number } 树的最大深度
   */
  function deepLength(left,right,len){
    /** 左右子树皆为空，说明没有节点了，当前长度已是最大深度 */
    if(left==null&&right==null) return len;

    /** 无论是有左节点还是右节点，深度+1 */
    len++;

    /** 只有右子树，返回右子树的最大长度 */
    if(left==null) return deepLength(right.left,right.right,len);

    /** 只有左子树，返回子子树的最大长度 */
    if(right==null) return deepLength(left.left,left.right,len);

    /** 左右子树均存在，取左右子树的最大值 */
    return Math.max(deepLength(right.left,right.right,len),deepLength(left.left,left.right,len))
  }
  
};
// @lc code=end

