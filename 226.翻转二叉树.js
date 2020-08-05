/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 * 
 * @des
 * 翻转一颗二叉树
 * 
 * @demo
 * - 输入：
 *     4
 *   /   \
 *  2     7
 * / \   / \
 * 1   3 6   9
 * - 输出
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root==null||(root.left==null&&root.right==null))return root;
  let left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
// @lc code=end

