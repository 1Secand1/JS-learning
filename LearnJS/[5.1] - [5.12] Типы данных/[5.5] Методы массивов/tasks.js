if (0) {
  /*
      Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
      То есть дефисы удаляются, а все слова после них получают заглавную букву.
  
      Примеры:
       camelize("background-color") == 'backgroundColor';
       camelize("list-style-image") == 'listStyleImage';
       camelize("-webkit-transition") == 'WebkitTransition';       
   */

  function camelize(str) {
    return str.split("-").join("");
  }

  camelize("background-color");
  console.log(camelize("background-color"));
}

if (0) {
  /*
      Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
      ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
      Функция должна возвращать новый массив и не изменять исходный.
  
      let arr = [5, 3, 8, 1];
      let filtered = filterRange(arr, 1, 4);
      console.log( filtered ); // 3,1 (совпадающие значения)
      console.log( arr ); // 5,3,8,1 (без изменений)
   */

  function filterRange(arr, a, b) {
    return arr.filter((e) => e >= a && e < b);
  }

  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);

  console.log(filtered);
  console.log(arr);
}

if (0) {
  /*
      Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
      которые находятся между a и b. То есть, проверка имееwт вид a ≤ arr[i] ≤ b.
      Функция должна изменять принимаемый массив и ничего не возвращать.
      
      let arr = [5, 3, 8, 1];
      filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
      console.log( arr ); // [3, 1] 
  */

  function filterRange(arr, a, b) {
    arr.forEach((e, i) => {
      if (e > a || e < b) {
        arr.splice(i, 1);
      }
    });

    return arr;
  }

  let arr = [5, 3, 8, 1];
  filterRange(arr, 1, 4);

  console.log(arr);
}

if (0) {
  /*
      Сортировать в порядке по убыванию
  
      let arr = [5, 2, 1, -10, 8];
      console.log( arr ); // 8, 5, 2, 1, -10    
  */

  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
  console.log(arr);
}

if (0) {
  /*
      У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
      Создайте функцию copySorted(arr), которая будет возвращать такую копию.
  
      let arr = ["HTML", "JavaScript", "CSS"];
      let sorted = copySorted(arr);
      console.log( sorted ); // CSS, HTML, JavaScript
      console.log( arr ); // HTML, JavaScript, CSS (без изменений)
  */
  let arr = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr) {
    return arr.toSorted();
  }

  let sorted = copySorted(arr);

  console.log(sorted, " CSS, HTML, JavaScript");
  console.log(arr, " HTML, JavaScript, CSS (без изменений)");
}

if (0) {
  /*
      Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
      Задание состоит из двух частей.
  
      1) Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
      «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
  
      let calc = new Calculator;
      console.log( calc.calculate("3 + 7") ); // 10 
  
      2) Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
      Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
      Например, давайте добавим умножение *, деление / и возведение в степень **:
  
      let powerCalc = new Calculator;
      powerCalc.addMethod("*", (a, b) => a * b);
      powerCalc.addMethod("/", (a, b) => a / b);
      powerCalc.addMethod("**", (a, b) => a ** b);
  
      let result = powerCalc.calculate("2 ** 3");
      console.log( result ); // 8
  
      Для этой задачи не нужны скобки или сложные выражения.
      Числа и оператор разделены ровно одним пробелом.
      Не лишним будет добавить обработку ошибок.
  */

  function calculator() {
    const method = {};

    this.addMethod = addMethod;
    this.calculate = calculate;

    method["+"] = (a, b) => a + b;
    method["-"] = (a, b) => a - b;

    function addMethod(mathSymbol, arrowFunction) {
      method[mathSymbol] = arrowFunction;
    }

    function calculate(str) {
      let [a, mathSymbol, b] = str.split(" ");

      return method[mathSymbol](+a, +b);
    }
  }

  const powerCalc = new calculator();

  console.log(powerCalc.calculate("2 + 2"));
  powerCalc.addMethod("*", (a, b) => a * b);
  console.log(powerCalc.calculate("2 * 3"));
}

if (0) {
  /*
      У вас есть массив объектов user, и в каждом из них есть user.name. 
      Напишите код, который преобразует их в массив имён.
  
      let vasya = { name: "Вася", age: 25 };
      let petya = { name: "Петя", age: 30 };
      let masha = { name: "Маша", age: 28 };
  
      let users = [ vasya, petya, masha ];
      let names = ... ваш код 
      console.log( names ); // Вася, Петя, Маша
   */

  function fromTheObjectValuesToTheValueArray(key, obgArr) {
    return obgArr.map((item) => item[key]);
  }

  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];
  let names = fromTheObjectValuesToTheValueArray("name", users);
  console.log(names); // Вася, Петя, Маша
}

if (0) {
  /*
      У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
      Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
      где fullName – состоит из name и surname.
  
      Итак, на самом деле вам нужно трансформировать один массив объектов в другой. 
      Попробуйте использовать =>. Это небольшая уловка.
  */

  function rebuildTheObject(obgArr) {
    return obgArr.map((obg) => ({
      id: obg.id,
      fullName: `${obg.name} ${obg.surname}`,
    }));
  }

  let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya = { name: "Петя", surname: "Иванов", id: 2 };
  let masha = { name: "Маша", surname: "Петрова", id: 3 };

  let users = [vasya, petya, masha];

  let usersMapped = rebuildTheObject(users);

  console.log(usersMapped);

  console.log(usersMapped[0].id); // 1
  console.log(usersMapped[0].fullName); // Вася Пупкин
}

if (0) {
  // не решил
  /*
      Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
      ногократные прогоны через shuffle могут привести к разным последовательностям элементов. 
  
      let arr = [1, 2, 3];
  
      shuffle(arr);
      // arr = [3, 2, 1]
  
      shuffle(arr);
      // arr = [2, 1, 3]
  
      shuffle(arr);
      // arr = [3, 1, 2]
      // ...
  
      Все последовательности элементов должны иметь одинаковую вероятность. 
      Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], 
      или [3,1,2] и т.д., с равной вероятностью каждого случая.
  */

  function shuffle(arr) {}
}

if (1) {
  //Не решил
  /*
      Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
      Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
  

  
      console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
  */

  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };

  let arr = [vasya, petya, masha];
}

/*
    Пусть arr – массив строк.
    Напишите функцию unique(arr), которая возвращает массив, 
    содержащий только уникальные элементы arr.

    function unique(arr) {
      ваш код... 
    }

    let strings = ["кришна", "кришна", "харе", "харе",
      "харе", "харе", "кришна", "кришна", ":-O"
    ];

    console.log( unique(strings) ); // кришна, харе, :-O
*/

/*
    Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
    Создайте функцию groupById(arr), которая создаст из него объект с id в качестве 
    ключа и элементами массива в качестве значений.

    let users = [
      {id: 'john', name: "John Smith", age: 20},
      {id: 'ann', name: "Ann Smith", age: 24},
      {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);

    // после вызова у нас должно получиться:

    usersById = {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }

    Такая функция очень удобна при работе с данными, которые приходят с сервера.
    В этой задаче мы предполагаем, что id уникален. 
    Не может быть двух элементов массива с одинаковым id.
    Используйте метод .reduce в решении.
*/

// ************************************************************
/*
  187 строчка


function rebuildTheObject(obgArr) {
  return obgArr.map((obg) => ({
    id: obg.id,
    fullName: `${obg.name} ${obg.surname}`,
  }));
}

function rebuildTheObject(obgArr) {
  return obgArr.map((obg) => {
    return {
      id: obg.id,
      fullName: `${obg.name} ${obg.surname}`,
    };
  });
}
*/
