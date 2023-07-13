console.log("\nНе глубокое копирование");

const obg = { a: 1 };
const newObg = obg;

newObg["a"] = 2;

console.log("\nobg:", obg); // 2
console.log("newObg:", newObg); // 2
console.log("obg === newObg:", obg === newObg); // true

if (0) {
  //Object.assign

  const obg = { a: 1 };
  const newObg = Object.assign({}, obg);

  newObg["a"] = 2;

  console.log("\nobg2:", obg); // 1
  console.log("newObg:", newObg); // 2
  console.log("obg === newObg:", obg === newObg); //false
}

if (0) {
  //structuredClone

  const obg = { a: 1 };
  const newObg = structuredClone(obg);

  newObg["a"] = 2;

  console.log("\nobg2:", obg); // 1
  console.log("newObg:", newObg); // 2
  console.log("obg === newObg:", obg === newObg); //false
}

if (0) {
  // spret

  const obg = { a: 1 };
  const newObg = { ...obg };

  newObg["a"] = 2;

  console.log("\nobg2:", obg); // 1
  console.log("newObg:", newObg); // 2
  console.log("obg === newObg:", obg === newObg); //false
}

if (0) {
  // JSON.parse() и JSON.stringify().

  const obg = { a: 1 };
  const newObg = JSON.parse(JSON.stringify(obg));

  newObg["a"] = 2;

  console.log("\nobg2:", obg); // 1
  console.log("newObg:", newObg); // 2
  console.log("obg === newObg:", obg === newObg); //false
}

if (0) {
  // Рекурсия

  function copy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      newObj[key] = copy(obj[key]);
    }

    return newObj;
  }
  console.log("\nГлубокое копирование");

  const obg = { a: 1 };
  const newObg = copy(obg);

  newObg["a"] = 2;

  console.log("\nobg2:", obg); // 1
  console.log("newObg:", newObg); // 2
  console.log("obg === newObg:", obg === newObg); //false
}

