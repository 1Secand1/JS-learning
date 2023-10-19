function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function functionStartTime(fun) {
  return function name(...arg) {
    const timeStart = new Date().toLocaleTimeString();
    const message = `${timeStart} - Время запуска функции ${fun.name}c параметрами (${arg}) `;

    console.log(message);
    return fun.apply(this, arg);
  };
}

function startupMessage(fun, message) {
  return function name(...arg) {
    const parameters = new Map();

    parameters.set(fun.name, message);

    console.log(parameters.get(fun.name));
    return fun.apply(this, arg);
  };
}

multiply = startupMessage(multiply, "умножение");
sum = startupMessage(sum, "сумма");

console.log(multiply(1, 4));
console.log(sum(1, 4));
