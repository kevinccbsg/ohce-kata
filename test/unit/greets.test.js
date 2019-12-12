const { greets } = require('../../lib');

describe('Greets', () => {
  it('should greets Buenas Noches', () => {
    const nightTime = 21;
    const name = 'Ismael';
    const result = `¡Buenas noches ${name}!`;
    expect(greets({ time: nightTime, name })).toEqual(result);
  });
  it('should greets Buenas dias', () => {
    const dayTime = 7;
    const name = 'Ismael';
    const result = `¡Buenas días ${name}!`;
    expect(greets({ time: dayTime, name })).toEqual(result);
  });
  it('should greets Buenas tardes', () => {
    const eveningTime = 19;
    const name = 'Ismael';
    const result = `¡Buenas tardes ${name}!`;
    expect(greets({ time: eveningTime, name })).toEqual(result);
  });
});
