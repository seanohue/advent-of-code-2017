module.exports = (spreadsheet, splitter = '\t') => {
  let sum = 0;
  for (const row of spreadsheet.split('\n')) {
    const numbers  = row.split(splitter);
    const largest  = Math.max(...numbers);
    const smallest = Math.min(...numbers);
    sum += (largest - smallest);
  }

  return sum;
}