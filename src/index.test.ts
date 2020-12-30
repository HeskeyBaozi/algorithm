import { sum } from './index';

describe('sum', () => {
  it('should be ok', () => {
    assert.strictEqual(sum(2, 4), 4);
  });
});
