const { isPalindrome } = require('../../lib');

describe('isPalindrome method tests', () => {
  it('should return false when input is not a palindrome', () => {
    const input = 'NoPalindrome';
    const expected = false;
    const result = isPalindrome(input);
    expect(result).toEqual(expected);
  });

  it('should return true when input is a palindrome', () => {
    const input = 'oto';
    const expected = true;
    const result = isPalindrome(input);
    expect(result).toEqual(expected);
  });
});
