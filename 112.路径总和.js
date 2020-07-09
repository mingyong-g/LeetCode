/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 * 
 * @des
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * @demo
 * 给定如下二叉树，以及目标和 sum = 22，返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

  if(root==sum)return true; 
  if(root==null) return false;

  let result = root.val;

  /** 第一轮就相等需要特殊判断 */
  if(result == sum){
    if(root.left==null&&root.right==null) return true;
    if(root.left==null||root.right==null) return false;
  }

  return add(root.left,result)||add(root.right,result);

  function add(root,result){
    if(root==null) return false;
    result += root.val;

    /** 确定已经到叶节点了进行判断 */
    if(root.right==null&&root.left==null){
      if(result==sum) return true;
      return false;
    }
    return add(root.left,result)||add(root.right,result);
  }

};
// @lc code=end

