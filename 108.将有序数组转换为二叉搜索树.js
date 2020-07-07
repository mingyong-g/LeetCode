/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * 
 * @des
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
 * 
 * @demo
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 *      0
 *     / \
 *   -3   9
 *  /    /
 * -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  
  /** 递归的终止条件 */
  let len = nums.length;
  if(len<=0) return null;

  /* ******************************* 
   *
   *  永远把数组的中位数作为树的root
   *
   ****************************** */

  /** 向下取整，避免长度为1时溢出 */
  let middle = Math.floor(len/2);
  let root = new TreeNode(nums[middle]);
  let left = nums.slice(0,middle);

  /** middle+1：当前中位数已用来创建树节点 */
  let right = nums.slice(middle+1);
  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);

  return root;

};
// @lc code=end

