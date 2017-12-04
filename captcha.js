module.exports = (input, halfsies) => {
  return input
    .split('')
    .map(Number)
    .reduce((acc, current, index, digits) => {
      let checkAgainst = 1;
      if (halfsies) {
        checkAgainst = Math.ceil(digits.length / 2);
      }

      // Check to see if matches next.
      const checkIndex = (index + checkAgainst) % digits.length;
      if (current === digits[checkIndex]) {
        return acc + current;
      }

      // Move on
      return acc;
    }, 0);
}