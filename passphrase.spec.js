const passphrase = require('./passphrase');

describe('Validating passphrase', function () {
  it('should be valid if no word repeats', function () {
    expect(passphrase.isValid('aa bb cc dd ee')).to.be.true;
  });

  it('should be invalid if a word repeats' , function () {
    expect(passphrase.isValid('aa bb cc dd ee aa')).to.be.false;
  });
});

let phrases =
`aa bb cc dd
aa bb aa dd
gg ff xx yy`;

describe('Finding number of valid passphrases', function () {
  it('should return number of valid passphrases given a string w/ a phrase on each line', function () {
    expect(passphrase.numberValid(phrases)).to.equal(2);
  });
});