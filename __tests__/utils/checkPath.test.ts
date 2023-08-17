import { checkPath } from '../../src/utils/checkPath';

describe('checkPath', () => {
  it('should return true if path matches currentPath', () => {
    const path = '/home/user';
    const currentPath = '/home/user';
    const result = checkPath(path, currentPath);

    expect(result).toBe(true);
  });

  it('should return false if path does not match currentPath', () => {
    const path = '/home/user';
    const currentPath = '/home/admin';
    const result = checkPath(path, currentPath);

    expect(result).toBe(false);
  });
});
