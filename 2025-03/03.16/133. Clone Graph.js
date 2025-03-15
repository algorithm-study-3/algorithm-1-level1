/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const answer = [];

  const dfs = (x) => {
    const node = new _Node(x.val);
    answer[node.val] = node;

    for (let neighbor of x.neighbors) {
      if (answer[neighbor.val]) node.neighbors.push(answer[neighbor.val]);
      else node.neighbors.push(dfs(neighbor));
    }

    return node;
  };

  return node ? dfs(node) : null;
};
