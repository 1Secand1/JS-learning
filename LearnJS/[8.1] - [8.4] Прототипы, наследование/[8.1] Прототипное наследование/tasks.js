if (0) {
  let animal = {
    jumps: null,
  };
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };

  console.log(rabbit.jumps); // true (1)

  delete rabbit.jumps;

  console.log(rabbit.jumps); // null (2)

  delete animal.jumps;

  console.log(rabbit.jumps); // undefined (3)
}

//****************************************** */

if (0) {
  /**
   * 1) С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
   * pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table),
   * а bed.glasses – значение 1 (найденное в head).
   *
   * 2) Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
   * При необходимости составьте цепочки поиска и сравните их.
   *
   *
   */

  let head = {
    glasses: 1,
  };

  let table = {
    pen: 3,
    __proto__: head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };

  let pockets = {
    money: 2000,
    __proto__: bed,
  };
  console.log(bed.glasses);
}

//****************************************** */
if (1) {
  // Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
  let animal = {
    eat() {
      this.full = true;
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.eat();
  //свойско full получит объект rabbit
}
