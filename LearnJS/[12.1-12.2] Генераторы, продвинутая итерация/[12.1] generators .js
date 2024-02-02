function* generateSequence(seed) {
  while (true) {
    yield seed = seed * 16807 % 2147483647;
  }
}

const pseudoRandom = generateSequence(1);

console.log(pseudoRandom.next().value);
console.log(pseudoRandom.next().value);
console.log(pseudoRandom.next().value);