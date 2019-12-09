const { reverse } = require('./lib');

const procesor = input => {
  const reverseInput = reverse(input);
  console.log(reverseInput);
};

module.exports = { procesor };
