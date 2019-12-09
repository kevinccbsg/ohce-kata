const { isPalindrome } = require('../../lib');

describe('isPalindrome method tests', () => {
  it('should return false when it is not a palindrome', () => {
    const input = 'NoPalindrome';
    const expected = false;
    const result = isPalindrome(input);
    expect(result).toEqual(expected);
  });
});
