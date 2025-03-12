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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const answer = [];
  const queue = [root];

  while (queue.length > 0) {
    const qLen = queue.length;
    const curLevel = [];

    for (let i = 0; i < qLen; i++) {
      const cur = queue.shift();

      if (!cur) continue;

      curLevel.push(cur.val);

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    if (curLevel.length > 0) answer.push(curLevel);
  }

  return answer;
};
