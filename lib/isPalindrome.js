const reverse = require('./reverse');
const pipe = require('../utils/pipe');

module.exports = input => {
  const regxUnwantedChars = /[\W_]/g;
  const _formatEitherWordOrPhrase = words => words.toLowerCase().replace(regxUnwantedChars, '');
  const _areInputsEqual = reverseFn => formatInput => reverseFn(formatInput) === formatInput;
  return pipe(_formatEitherWordOrPhrase, _areInputsEqual(reverse))(input);
};
