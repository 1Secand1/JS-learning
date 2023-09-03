let numbers = {
  from: 2,
  to: 10,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current >= this.to) {
      return { done: true };
    }

    if (this.current % 2 != 0) {
      this.current++;
    }

    return { done: false, value: this.current++ };
  },
};

for (let num of numbers) {
  console.log(num);
}
