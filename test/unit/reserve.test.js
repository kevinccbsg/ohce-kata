const { reverse } = require('../../lib');

describe('Reverse', () => {
  it('should print the reverse of a given value', () => {
    const input = 'Kevin';
    const expected = 'niveK';

    expect(reverse(input)).toEqual(expected);
  });
});
