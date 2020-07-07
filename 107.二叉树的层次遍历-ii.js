  /*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 * 
 * @des 
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * @demo
 * 给定二叉树 [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 返回其自底向上的层次遍历为：[[15,7],[9,20],[3]]
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
 * @return {number[][]}
 */

/* ********************************** 
 * 
 * 官网推荐解法
 * 
 * var levelOrderBottom = function(root) {
 *  let res=[];
 *  const deepf=(node,level)=>{
 *    if(!node){
 *       return
 *     }
 *    res[level]?res[level].push(node.val):res[level]=[node.val];
 *    level++;
 *    deepf(node.left,level);
 *    deepf(node.right,level);
 *  }
 *   deepf(root,0)
 *  return res.reverse();
 * };
 * 
 ***********************************/


var levelOrderBottom = function(root) {
  let arr = [];
  let level = 0;
  if(root==null) return arr;
  arr[0] = [root.val];

  forTree(root.left,root.right,level);
  return arr.reverse();

  /**
   * @description 逐层判断，是否有不为null的节点
   * @param { TreeNode } left 树的左侧
   * @param { TreeNode } right 树的右侧
   * @param { TreeNode } level 当前层级
   * @returns
   */
  function forTree(left,right,level){
    if(left==null&&right==null) return;
    
    /** 不为空层级+1 */
    level++;

    /* ************************************************ 
     *
     * 判断当前层级是否有节点被访问
     * 无节点被访问则初始化arr[level]为空数组
     * 如果已经有节点被访问（arr[level]已经是数组），则忽略
     *  
     ************************************************ */
    arr[level]?'':arr[level]=[];

    if(right==null){
      arr[level].push(left.val);
      forTree(left.left,left.right,level);
    }
    if(left==null){
      arr[level].push(right.val);
      forTree(right.left,right.right,level);
    } 
    if(left!=null&&right!=null){
      arr[level].push(left.val,right.val);
      forTree(left.left,left.right,level);
      forTree(right.left,right.right,level);
    }
  }
  
  
};
// @lc code=end

