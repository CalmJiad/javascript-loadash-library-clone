// Generating 1 to 20 with a step of 5 using a simple iterator
const instructions = {
  startFrom: 0,
  stopAt: 30,
  step: 5,
};

// creating a custom iterator using Symbol.iterator factory function
instructions[Symbol.iterator] = () => {
  let current = instructions.startFrom;
  let stopAt = instructions.stopAt;
  let step = instructions.step;

  return {
    // definining next function with value & done properties
    next: () => {
      if (current >= stopAt) return { value: current, done: true };
      current += step;
      return { value: current, done: false };
    },
  };
};

for (let num of instructions) {
  console.log(num);
}

// Output : 5 10 15 20 25 30
