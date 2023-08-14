function CreateОrder() {
  const list = new Map();

  this.lock = false;
  this.list = list;

  this.addItem = function (item, count) {
    if (this.lock) {
      console.log("Изменение списака заблакированно");
      return;
    }

    let { name, unitPrice } = item;
    name = name.toLocaleLowerCase();

    countValidation(count);

    if (list.has(name)) {
      const element = list.get(name);

      list.set(name, {
        unitPrice: element.unitPrice,
        count: element.count + count,
      });
      return;
    }

    if (!unitPrice) {
      throw new Error("Ну указанно цена за штуку");
    }

    if (!list.has(name)) {
      list.set(name, { unitPrice, count });
    }
  };

  this.removeItem = function (item, count = 0) {
    if (this.lock) {
      console.log("Изменение списака заблакированно");
      return;
    }

    let { name, unitPrice } = item;
    name = name.toLocaleLowerCase();
    const element = list.get(name);

    if (element.count - count <= 0 || count == 0) {
      list.delete(name);
      return;
    }

    countValidation(count);

    if (list.has(name)) {
      list.set(name, {
        unitPrice: element.unitPrice,
        count: element.count - count,
      });
    }
  };

  this.getCheck = function () {
    let totalPrice = 0;
    list.forEach((element, key) => {
      const a = element.unitPrice * element.count;
      totalPrice += a;

      console.log(`${element.count} ${key} - ${a}р`);
    });
    console.log(`Общая цена : ${totalPrice}`);
  };

  this.lockOrder = function () {
    Object.defineProperty(this, "lock", {
      value: false,
    });
  };
  this.unlockOrder = function () {
    Object.defineProperty(this, "lock", {
      value: true,
    });
  };
  Object.defineProperty(this, "lock", {
    writable: this.lock,
  });

  function countValidation(count) {
    if (!count) {
      throw new Error("Не переданно число товоаров");
    }

    if (!isFinite(count)) {
      throw new Error("Передано не числовое значение");
    }

    if (count !== Math.floor(count)) {
      throw new Error("Передано не целое число");
    }

    if (count <= 0) {
      throw new Error("Передано отрицательне число");
    }
  }
}

let user1 = new CreateОrder();

user1.addItem({ name: "Вафля", unitPrice: 100 }, 1);
user1.addItem({ name: "Вафля" }, 1);
user1.addItem({ name: "пивО", unitPrice: 100 }, 1);
user1.addItem({ name: "пиво", unitPrice: 100 }, 1);
user1.removeItem({ name: "Вафля" }, 1);

user1.lockOrder();
user1.addItem({ name: "Абоба чай", unitPrice: 100 }, 1);

user1.unlockOrder();
user1.addItem({ name: "Абоба чай", unitPrice: 100 }, 1);

user1.getCheck();
