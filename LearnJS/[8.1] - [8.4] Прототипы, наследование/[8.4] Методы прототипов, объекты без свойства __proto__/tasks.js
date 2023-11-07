/**
 * Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
 * Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
 * Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
 */

let dictionary = Object.create(null, {
  toString: {
    value: function () {
      let stringValue;

      for (const key in this) {
        if (!stringValue) {
          stringValue = `${key}`;
        } else {
          stringValue += `,${key}`;
        }
      }

      return stringValue;
    },
  },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";
dictionary.toString();

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary.toString());
