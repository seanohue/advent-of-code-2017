function findMaxRegister(commands) {
  const parser = new Parser(commands);
  parser.parse();
  return parser.maxValue;
}

class Parser {
  constructor(commands) {
    this.commands = commands
      .split('\n')
      .map(line => line.split(' '));
    this.registers = new Map();
  }

  get instructions() {
    return {
      'inc': (x, y) => x + y,
      'dec': (x, y) => x - y
    }
  }

  get maxValue() {
    console.log(...this.registers.values());
    return Math.max(...this.registers.values());
  }

  parse() {
    for (const command of this.commands) {
      const [firstRegister, mutateOp, firstAmount, /* skip if */,
             secondRegister, compOp, secondAmount] = command;
      this.initialize(firstRegister, secondRegister);

      if (this.evaluate(secondRegister, compOp, secondAmount)) {
        const operation = this.instructions[mutateOp];
        this.registers.set(
          firstRegister,
          operation(
            this.registers.get(firstRegister),
            firstAmount
          )
        );
      }
    }
  }

  initialize(...registers) {
    registers.forEach(reg => {
      if (!this.registers.has(reg)) {
        this.registers.set(reg, 0);
      }
    });
  }

  evaluate(first, op, second) {
    return eval(`${this.registers.get(first)} ${op} ${this.registers.get(second)}`);
  }
}


module.exports = { findMaxRegister };
