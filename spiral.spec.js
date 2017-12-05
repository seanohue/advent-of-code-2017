const spiral = require('./spiral');

describe('Accessing spiral memory', function () {
  it('should take the correct number of steps to get to a thing', function () {
    expect(spiral(1)).to.equal(0);
    expect(spiral(12)).to.equal(3);
    expect(spiral(23)).to.equal(2);
    expect(spiral(1024)).to.equal(31);
  });
});