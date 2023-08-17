import { tweetCreatedTime } from '../../src/utils/tweetCreatedTime';

describe('tweetCreatedTime', () => {
  test('tweetCreatedTime should return the correct time in minutes for recent tweets', () => {
    const currentTime = Date.now();
    const tweetTime = currentTime - 5 * 60 * 1000;
    const expectedResult = '· 5min';

    const result = tweetCreatedTime(tweetTime);

    expect(result).toBe(expectedResult);
  });

  test('tweetCreatedTime should return the correct time in hours for older tweets', () => {
    const currentTime = Date.now();
    const tweetTime = currentTime - 2 * 60 * 60 * 1000;
    const expectedResult = '· 2h';

    const result = tweetCreatedTime(tweetTime);

    expect(result).toBe(expectedResult);
  });
});
