const captcha = require('./captcha');

describe('Simple Captchas', function() {
  it('should sum up two pairs of matching digits', function () {
    expect(captcha('1122')).to.equal(3);
  });

  it('should sum up four matching digits', function () {
    expect(captcha('1111')).to.equal(4);
  });

  it('should equal zero if none match', function () {
    expect(captcha('1234')).to.equal(0);
  });

  it('should wrap', function () {
    expect(captcha('91212129')).to.equal(9);
  });
});