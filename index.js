const { reverse, isPalindrome } = require('./lib');

const procesor = input => {
  if (isPalindrome(input)) {
    console.log(input);
    console.log('¡Bonita palabra!');
    return;
  }
  const reverseInput = reverse(input);
  console.log(reverseInput);
};

module.exports = { procesor };
