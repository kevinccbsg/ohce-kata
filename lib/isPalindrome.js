const reverse = require('./reverse');

module.exports = input => {
  const reverseInput = reverse(input);
  return input === reverseInput;
};
