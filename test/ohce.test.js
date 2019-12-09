const { procesor } = require('..');

jest.spyOn(global.console, 'log');

describe('Ohce', () => {
  it('should print reverse input in console', () => {
    const input = 'Message';
    const result = 'egasseM';
    procesor(input);
    expect(console.log).toBeCalled();
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
