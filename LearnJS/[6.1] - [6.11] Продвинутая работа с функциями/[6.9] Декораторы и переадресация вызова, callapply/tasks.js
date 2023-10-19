/*
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.
*/

function work(a, b) {
  return a + b;
}

function spy(fun) {
  function wrap(...param) {
    wrap.calls.push(param);
    return fun.apply(this, param);
  }

  wrap.calls = [];

  return wrap;
}

work = spy(work);
console.log(work(1, 2));
console.log(work(4, 3));
console.log(work.calls);

for (let args of work.calls) {
  console.log("call:" + args.join());
}

/**
 Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
 */

function f(x) {
  console.log(x);
}

function delay(fun, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
