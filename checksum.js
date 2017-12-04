module.exports = (spreadsheet, splitter = '\t', evenDiv = false) => {
  let sum = 0;
  for (const row of spreadsheet.split('\n')) {
    const numbers = row.split(splitter);
    if (evenDiv) {
      for (const number of numbers) {
        const divisible = numbers.find(x => x !== number && x % number === 0);
        if (divisible) {
          sum += (divisible / number);
          break;
        }
      }
      continue;
    }
    const largest  = Math.max(...numbers);
    const smallest = Math.min(...numbers);
    sum += (largest - smallest);
  }

  return sum;
}