const { reverse, isPalindrome, greets } = require('./lib');

const procesor = input => {
  if (isPalindrome(input)) {
    console.log(input);
    console.log('¡Bonita palabra!');
    return;
  }
  const reverseInput = reverse(input);
  console.log(reverseInput);
};

const initGreets = args => {
  const name = args[2];
  const time = new Date().getTime();

  const greeting = greets({ time, name });

  return console.log(greeting);
};

module.exports = { procesor, initGreets };
