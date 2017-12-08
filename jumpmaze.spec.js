const jumpmaze = require('./jumpmaze');
describe('Jumping the maze', function () {
  it('should keep track of steps needed to jump out of a list', function () {
    expect(jumpmaze('0\n3\n0\n1\n-3')).to.equal(5);
  });

  it('should do the increment behavior', function () {
    expect(jumpmaze('0')).to.equal(2);
  });
});

