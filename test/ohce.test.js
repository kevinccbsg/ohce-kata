const init = require('..');

const spy = jest.spyOn(global.console, 'log');
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});


describe('Ohce', () => {
  beforeEach(() => {
    spy.mockClear();
  });

  it('should print greeting in console', () => {
    const { greet } = init([null, null, 'Ismael']);
    greet();
    expect(console.log).toBeCalled();
    expect(console.log).toHaveBeenCalledWith(expect.stringMatching(/Ismael/));
  });

  describe('processor', () => {
    const { processor } = init([null, null, 'Ismael']);
    it('should print adios with name', () => {
      const input = 'Stop!';
      const result = 'Adios Ismael';
      processor(input);
      expect(console.log).toBeCalled();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(result);
      expect(mockExit).toHaveBeenCalledWith(0);
    });
    it('should print reverse input in console', () => {
      const input = 'Message';
      const result = 'egasseM';
      processor(input);
      expect(console.log).toBeCalled();
      expect(console.log).toHaveBeenCalledWith(result);
    });

    it('should print the input and this sentence "¡Bonita palabra!" when input is a palindrome', () => {
      const input = 'oto';
      const firstPrint = input;
      const secondPrint = '¡Bonita palabra!';
      processor(input);
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(console.log).toHaveBeenNthCalledWith(1, firstPrint);
      expect(console.log).toHaveBeenNthCalledWith(2, secondPrint);
    });
  });
});
