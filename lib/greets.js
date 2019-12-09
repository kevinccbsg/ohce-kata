
module.exports = ({ time: inputTime, name }) => {
  const TIMES = {
    nightLimit: new Date().setHours(20, 0, 0, 0),
    eveningLimit: new Date().setHours(12, 0, 0, 0),
    dayLimit: new Date().setHours(6, 0, 0, 0),
  };

  const nighMsg = time => {
    const isNighTime = time >= TIMES.nightLimit || time < TIMES.dayLimit;
    return isNighTime && `¡Buenas noches ${name}!`;
  };

  const dayMsg = time => {
    const isDayTime = time >= TIMES.dayLimit && time < TIMES.eveningLimit;
    return isDayTime && `¡Buenas días ${name}!`;
  };

  const eveningMsg = time => {
    const isEveningTime = time >= TIMES.eveningLimit && time < TIMES.nightLimit;
    return isEveningTime && `¡Buenas tardes ${name}!`;
  };

  return [nighMsg(inputTime), dayMsg(inputTime), eveningMsg(inputTime)].filter(Boolean)[0];
};
