/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 * 
 * @des 
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
 * 最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖 先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * @idea
 * - 如果p,q分别位于当前节点的两侧那么当前节点即为所求
 * 
 * - 利用二叉搜索树的特性简化节点位置判断
 * - 如果p,q均小于当前节点，则说明两个都在节点左侧
 * - 如果p,q节点均大于当前节点，则说明两个都在节点右侧
 * - 一左一右即为所求
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   
    // if(root==null) return root;
    if(p.val<root.val&&q.val<root.val){
       return lowestCommonAncestor(root.left,p,q);
    }
    if(p.val>root.val&&q.val>root.val){
       return lowestCommonAncestor(root.right,p,q);
    }
    return root;
};
// @lc code=end

