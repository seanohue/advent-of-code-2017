const isValid = (phrase) => !!phrase && phrase.split(' ').every((word, i, words) => words.filter(w => isAnagram(word, w)).length <= 1);
const numberValid = phrases => phrases.split('\n').filter(isValid).length;
const isAnagram = (a, b) => a === b || (a.length === b.length && a.split('').sort().every((char, i) => b.split('').sort()[i] === char));

module.exports = {
  isValid,
  numberValid,
  isAnagram
};