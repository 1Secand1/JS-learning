function calculateSum(array) {
  debugger;
  let sum = 0;
  for (let i = 1; i <= array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result);
