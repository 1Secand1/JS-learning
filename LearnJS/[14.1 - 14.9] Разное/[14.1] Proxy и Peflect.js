// Ошибка при чтении несуществующего свойства
if (0) {

  let user = {
    name: "John"
  };

  function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (!(prop in target)) {
          throw new Error(`key ${prop} undefined`);
        }
        return Reflect.get(...arguments);
      }
    });
  }

  user = wrap(user);

  console.log(user.name);
  console.log(user.age);
}

// Получение элемента массива с отрицательной позиции
if (0) {

  let array = [1, 2, 3];

  array = new Proxy(array, {
    get(target, prop, receiver) {
      if (prop < 0) {
        prop = target.length - Math.abs(prop);
      }
      return Reflect.get(...arguments);
    }
  });

  console.log(array[-1]); // 3
  console.log(array[-2]); // 2
}

// ObservableТ

if (1) {
  function makeObservable(target) {
    target.handlers = new Map();

    target.observe = function (method, handler) {
      this.handlers.set(method, handler);
    };

    return new Proxy(target, {
      set(target, prop, value, receiver) {
        target.handlers.get("set")(prop, value);
        return Reflect.get(...arguments);
      }
    });
  }

  let user = {};
  user = makeObservable(user);

  user.observe('set', (key, value) => {
    console.log(`SET ${key}=${value}`);
  });

  user.name = "John"; // выводит: SET name=John
}
