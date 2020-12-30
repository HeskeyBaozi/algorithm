import type { TreeNode } from './types';

export function* preorderTraversal(root: TreeNode | null) {
  if (!root) {
    return;
  }

  const stack: TreeNode[] = [root];
  while (stack.length) {
    const current = stack.pop()!;

    yield current.val;

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }
}
