module.exports = (steps) => {
  const jumper = new Jumper(steps);

  while (jumper.inList) {
    console.log(jumper);
    jumper.jump();
  }

  return jumper.stepsTaken;
}

class Jumper {
  constructor(list) {
    this.list = list.split('\n').map(Number);
    this.stepsTaken = 0;
    this.index = 0;
  }

  get current() {
    return this.list[this.index];
  }

  get inList() {
    return typeof(this.current) !== 'undefined';
  }

  jump() {
    const amount = this.current;
    this.list[this.index]++;
    this.index += amount;
    this.stepsTaken++;
  }
}