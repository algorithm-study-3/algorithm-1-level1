/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function checkHeight(node) {
    if (!node) return 0;

    let leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1; // 왼쪽 서브트리가 불균형이면 종료

    let rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1; // 오른쪽 서브트리가 불균형이면 종료

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // 현재 노드가 불균형

    return Math.max(leftHeight, rightHeight) + 1; // 현재 노드의 높이 반환
  }
  return checkHeight(root) !== -1;
};
