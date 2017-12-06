const isValid = (phrase) => !!phrase && phrase.split(' ').every((word, i, words) => words.filter(w => w === word).length === 1);
const numberValid = phrases => phrases.split('\n').filter(isValid).length;

module.exports = {
  isValid,
  numberValid
};