/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 * 
 * @des 
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * @demo
 * 给定二叉树 [3,9,20,null,null,15,7],返回它的最小深度  2.
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
var minDepth = function(root) {

  /* *********************************
   *  
   * 多个if是为了找到叶节点
   * 
   * ******************************** */
  let level = 1;
  if(root==null) return 0;
  else if(root.left==null&&root.right==null) return 1;
  else if(root.right==null) return deepTree(root.left,level);
  else if(root.left==null) return deepTree(root.right,level);
  let min = Math.min(deepTree(root.left,level),
    deepTree(root.right,level));
  return min;

  function deepTree(root,level){
    if(root==null) return level;
    level++;
    if(root.left==null&&root.right==null) return level;
    else if(root.right==null) return deepTree(root.left,level);
    else if(root.left==null) return deepTree(root.right,level)
    let min = Math.min(deepTree(root.left,level),
      deepTree(root.right,level));
    return min;
  }
};
// @lc code=end

