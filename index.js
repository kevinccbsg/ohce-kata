const { reverse, isPalindrome, greets } = require('./lib');
const pipe = require('./utils/pipe');

const init = args => {
  const name = args[2];
  const time = new Date().getTime();

  const _isPalindrome = input => {
    if (isPalindrome(input)) console.log('¡Bonita palabra!');
    return input;
  };

  const _reverse = input => {
    const reverseInput = reverse(input);
    console.log(reverseInput);
    return input;
  };

  const _stop = (input, cb) => {
    if (input === 'Stop!') {
      console.log(`Adios ${name}`);
      return process.exit(0);
    }
    return cb(input);
  };

  const greet = () => {
    const greeting = greets({ time, name });
    return console.log(greeting);
  };

  const processor = input => _stop(input, pipe(_reverse, _isPalindrome));

  return { processor, greet };
};

module.exports = init;
