class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function diameterOfBinaryTree1(root: TreeNode | null): number {
    let maxDistance = 0;

    function seek(root: TreeNode) {
        let leftDepth = 0;
        let rightDepth = 0;

        const leftDfs = (cur, depth) => {
            if (depth > leftDepth) leftDepth += 1;

            if (cur.left) leftDfs(cur.left, depth + 1);
            if (cur.right) leftDfs(cur.right, depth + 1);
        }

        const rightDfs = (cur, depth) => {
            if (depth > rightDepth) rightDepth += 1;

            if (cur.left) rightDfs(cur.left, depth + 1);
            if (cur.right) rightDfs(cur.right, depth + 1);
        }

        if (root.left) {
            leftDfs(root.left, 1);
            seek(root.left);
        }

        if (root.right) {
            rightDfs(root.right, 1);
            seek(root.right);
        }

        if (leftDepth + rightDepth > maxDistance) maxDistance = leftDepth + rightDepth;
    }

    if (root) seek(root);

    return maxDistance;
};

function diameterOfBinaryTree2(root: TreeNode | null): number {
    let maxDistance = 0;

    function dfs(cur: TreeNode | null): number {
        if(!cur) return 0;

        const left = dfs(cur.left);
        const right = dfs(cur.right);

        maxDistance = Math.max(maxDistance, left + right);
        return 1 + Math.max(left, right);
    }

    dfs(root);
    return maxDistance;
};
