import { deepStrictEqual } from 'assert';
import { preorderTraversal } from './depth-first-search';
import { TreeNode } from './types';

describe('Depth First Search', () => {
  const case1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );

  it('should work', () => {
    const generator = preorderTraversal(null);
    deepStrictEqual([...generator], [1, 2, 3, 4, 5, 6, 7]);
  });
});
