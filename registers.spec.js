const registers = require('./registers');

const test =
`b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

describe('Parsing commands and finding max register value', function () {
  it('should find max register based on example', function () {
    expect(registers.findMaxRegister(test)).to.equal(1);
  });
});