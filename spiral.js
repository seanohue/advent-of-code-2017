module.exports = (n) => {
  let current = 1;
  let stepsBack = 0;

  while (current < n) {
    current++;
  }

  while (current !== 1) {
    current--;
    stepsBack++;
  }

  return stepsBack;
};