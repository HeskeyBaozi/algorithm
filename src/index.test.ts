import { sum } from './index';
import assert from 'assert';

describe('sum', () => {
  it('should be ok', () => {
    assert(sum(2, 4) === 4);
  });
});
