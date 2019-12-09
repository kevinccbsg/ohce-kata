const { greets } = require('../../lib');

describe('Greets', () => {
  it('should greets Buenas Noches', () => {
    const date = new Date();
    const nightTime = date.setHours(21, 0, 0, 0);
    const name = 'Ismael';
    const result = `¡Buenas noches ${name}!`;
    expect(greets({ time: nightTime, name })).toEqual(result);
  });
  it('should greets Buenas dias', () => {
    const date = new Date();
    const dayTime = date.setHours(7, 0, 0, 0);
    const name = 'Ismael';
    const result = `¡Buenas días ${name}!`;
    expect(greets({ time: dayTime, name })).toEqual(result);
  });
  it('should greets Buenas tardes', () => {
    const date = new Date();
    const eveningTime = date.setHours(19, 0, 0, 0);
    const name = 'Ismael';
    const result = `¡Buenas tardes ${name}!`;
    expect(greets({ time: eveningTime, name })).toEqual(result);
  });
});
