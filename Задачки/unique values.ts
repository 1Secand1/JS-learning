//убрать из масива все пары значений
// [1, 1, 2, 2, 3] => 3
const muArr: number[] = [1, 1, 2, 2, 3];

function getUniqueValues([...arr]: number[]): number[] {
  if (arr.length == 0) console.error("Empty array");
  arr.sort((a, b) => a - b);

  const pairedValues: number[] = [];
  const uniqueValues: number[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == arr[index + 1]) {
      pairedValues.push(arr[index]);
      continue;
    }

    if (!pairedValues.includes(arr[index])) {
      uniqueValues.push(arr[index]);
    }
  }
  return uniqueValues;
}

console.log(getUniqueValues(muArr));
