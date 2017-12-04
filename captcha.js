module.exports = (input) => {
  return input
    .split('')
    .map(Number)
    .reduce((acc, current, index, digits) => {

      // Check for last.
      if (index === digits.length - 1) {
        if (current === digits[0]) {
          return acc + current;
        }
      }

      // Check to see if matches next.
      if (current === digits[index + 1]) {
        return acc + current;
      }

      // Move on
      return acc;
    }, 0);
}