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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true;
    if (!root) return false;

    function isSame(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
        if (!tree1 && !tree2) return true;

        if (tree1 && tree2 && tree1.val === tree2.val) {
            return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
        }

        return false;
    }

    if (isSame(root, subRoot)) {
        return true;
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};