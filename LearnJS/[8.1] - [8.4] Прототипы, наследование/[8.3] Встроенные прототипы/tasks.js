if (0) {
  /**
   * Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
   */

  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };

  function f() {
    console.log("Hello!");
  }

  f.defer(1000);
}

if (1) {
  /**
   * Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку,
   * откладывающую вызов функции на ms миллисекунд.
   */

  Function.prototype.defer = function (ms) {
    let fun = this;
    return function (...args) {
      setTimeout(() => fun.apply(this, args), ms);
    };
  };

  function f(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
  }

  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
}
