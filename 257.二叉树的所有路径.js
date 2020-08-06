/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 * 
 * @des
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * @demo
 * 输入:
 *    1
 *  /   \
 *  2    3
 *   \
 *    5
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root,str="",arr=[]) {
  if(root==null) return [];
  if(str){
    str = str+"->"+root.val;
  }
  else{
    str = ""+root.val;
  }

  /* ********************************** 
   * 左右皆为null说明是叶子节点
   * 到达叶子节点说明整条完整路径遍历完成
   ***********************************/
  if(root.left==null&&root.right==null){
    arr.push(str)
  }
  else{
    binaryTreePaths(root.left,str,arr);
    binaryTreePaths(root.right,str,arr);
  }
  return arr;
};
// @lc code=end

