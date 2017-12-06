const passphrase = require('./passphrase');

describe('Validating passphrase', function () {
  it('should be valid if no word repeats', function () {
    expect(passphrase.isValid('aa bb cc dd ee')).to.be.true;
    expect(passphrase.isValid('mxonybc fndyzzi gmdp gdfyoi inrvhr kpuueel wdpga vkq')).to.be.true;
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
  it('should be able to do a lot of em', function () {
    const test = require('./passphrases');
    expect(passphrase.numberValid(test)).to.equal(/*spoiler*/);
  });
});

describe('finding anagrams', function () {
  it('should find an anagram', function () {
    expect(passphrase.isAnagram('cato', 'taco')).to.be.true;
  });

  it('should return true if they are the same word', function () {
    expect(passphrase.isAnagram('same', 'same')).to.be.true;
  });

  it('should not have a false positive', function () {
    expect(passphrase.isAnagram('potato', 'cat')).to.be.false;
  });
});