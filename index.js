const { reverse, isPalindrome, greets } = require('./lib');

const init = args => {
  const name = args[2];
  const time = new Date().getTime();

  const greet = () => {
    const greeting = greets({ time, name });
    return console.log(greeting);
  };

  const procesor = input => {
    const reverseInput = reverse(input);
    console.log(reverseInput);
    if (isPalindrome(input)) console.log('¡Bonita palabra!');
  };

  return { procesor, greet };
};

module.exports = init;
