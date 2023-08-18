function CreateОrder() {
  const orderList = new Map();
  lock = false;

  this.addItem = function (item, count) {
    let { name, unitPrice } = item;
    name = name.toLocaleLowerCase();

    if (lock) {
      console.log(
        `"${Object.values(item).join(" - ")}": Изменение списка заблокированно `
      );
      return;
    }

    if (orderList.has(name)) {
      const element = orderList.get(name);

      orderList.set(name, {
        unitPrice: element.unitPrice,
        count: element.count + count,
      });
      return;
    }

    if (!unitPrice) {
      throw new Error("Ну указанно цена за штуку");
    }

    if (!orderList.has(name)) {
      orderList.set(name, { unitPrice, count });
    }
  };

  this.removeItem = function (item, count = undefined) {
    let { name, unitPrice } = item;
    name = name.toLocaleLowerCase();

    if (lock) {
      console.log(
        `"${Object.values(item).join(" - ")}": Изменение списка заблокированно `
      );
      return;
    }

    if (orderList.has(name)) {
      const element = orderList.get(name);

      if (element.count - count <= 0 || count == undefined) {
        orderList.delete(name);
      }
    } else {
      console.log(`Удаляемый элемент "${name}" отсутствует`);
      return;
    }

    countValidation(count);

    if (orderList.has(name)) {
      orderList.set(name, {
        unitPrice: element.unitPrice,
        count: element.count - count,
      });
      return;
    }
  };

  this.getCheck = function () {
    let totalPrice = 0;
    orderList.forEach((element, key) => {
      const a = element.unitPrice * element.count;
      totalPrice += a;

      console.log(`${element.count} ${key} - ${a}р`);
    });
    console.log(`Общая цена : ${totalPrice}`);
  };

  this.lockOrder = function () {
    lock = !lock;
  };

  this.unlockOrder = function () {
    lock = !lock;
  };

  function errorLockedItem(lock, item) {
    if (lock) {
      console.log(
        `"${Object.values(item).join(" - ")}": Изменение списка заблокированно `
      );
      return;
    }
  }

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
user1.removeItem({ name: "Привет" }, 1);

user1.lockOrder();
user1.addItem({ name: "Абоба чай", unitPrice: 100 }, 100000);
user1.unlockOrder();

user1.addItem({ name: "Абоба чай", unitPrice: 100 }, 1);

user1.getCheck();
