import type { SearchMeta, TreeNode } from './types';

export function* preorderTraversal(root: TreeNode | null): Generator<SearchMeta, void, void> {
  if (!root) {
    return;
  }

  const stack: SearchMeta[] = [{ node: root, depth: 1 }];
  while (stack.length) {
    const current = stack.pop()!;

    yield current;

    const { node, depth } = current;
    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }
  }
}
