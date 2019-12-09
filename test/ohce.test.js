const { procesor } = require('..');

const spy = jest.spyOn(global.console, 'log');

describe('Ohce', () => {
  beforeEach(() => {
    spy.mockClear();
  });

  it('should print reverse input in console', () => {
    const input = 'Message';
    const result = 'egasseM';
    procesor(input);
    expect(console.log).toBeCalled();
    expect(console.log).toHaveBeenCalledWith(result);
  });

  it('should print the input and this sentence "¡Bonita palabra!" when input is a palindrome', () => {
    const input = 'oto';
    const firstPrint = input;
    const secondPrint = '¡Bonita palabra!';
    procesor(input);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, firstPrint);
    expect(console.log).toHaveBeenNthCalledWith(2, secondPrint);
  });
});