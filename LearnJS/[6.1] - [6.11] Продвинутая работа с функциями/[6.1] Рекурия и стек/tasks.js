if (0) {
  /*
    Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
  */

  function sumTo(n) {
    return n == 0 ? n : n + sumTo(n - 1);
  }

  console.log(sumTo(2)); // = 2 + 1 = 3
  console.log(sumTo(4)); //  = 4 + 3 + 2 + 1 = 10
}

// ********************************************

if (0) {
  /*
    Факториал натурального числа – это число, умноженное на "себя минус один", 
    затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
  */

  function factorialTo(n) {
    return n == 1 ? n : n * factorialTo(n - 1);
  }

  console.log(factorialTo(5));
}

// ********************************************

if (0) {
  /*
    Напишите функцию printList(list), которая выводит элементы списка по одному.
  */

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  function printList(list) {
    console.log(list.value);

    if (list.next) {
      printList(list.next);
    }
  }

  printList(list);
}

// ********************************************
