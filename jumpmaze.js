module.exports = (steps, decrementAt = Infinity) => {
  const jumper = new Jumper(steps, decrementAt);

  while (jumper.inList) {
    jumper.jump();
  }

  return jumper.stepsTaken;
}

class Jumper {
  constructor(list, decrementAt = Infinity) {
    this.list = list.split('\n').map(Number);
    this.stepsTaken = 0;
    this.index = 0;
    this.decrementAt = decrementAt;
  }

  get current() {
    return this.list[this.index];
  }

  get inList() {
    return typeof(this.current) !== 'undefined';
  }

  jump() {
    const amount = this.current;
    this.changeOffset();
    this.index += amount;
    this.stepsTaken++;
  }

  changeOffset() {
    this.list[this.index] < this.decrementAt
      ? this.list[this.index]++
      : this.list[this.index]--;
  }
}