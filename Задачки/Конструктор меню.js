let l01 = new CreateОrder("Влад");

function CreateОrder() {
  const list = new Map();

  this.lock = false;
  this.list = list;
  this.addItem = function (item, count) {
    item = item.toLocaleLowerCase();

    if (!isFinite(count)) {
      throw new Error("Передано не числовое значение");
    }

    if (count <= 0) {
      throw new Error("Передано отрицательне число");
    }

    if (list.has(item)) {
      list.set(item, list.get(item) + count);
    }

    if (!list.has(item)) {
      list.set(item, count);
    }
  };
  this.removeItem = function (item, count) {
    item = item.toLocaleLowerCase();

    if (!isFinite(count)) {
      throw new Error("Передано не числовое значение");
    }

    if (count <= 0) {
      throw new Error("Передано отрицательне число");
    }

    if (!list.has(item.toLocaleLowerCase())) {
      throw new Error("Данная позиция не сущиствует в списке");
    }

    if (list.has(item)) {
      list.set(item, list.get(item) - count);
    }

    if (list.get(item) === 0) {
      list.delete(item);
    }
  };
  this.getCheck = function () {
    list.forEach((e, k) => {
      console.log(`${k} - ${e} руб `);
    });
  };

  this.lockOrder = function () {
    Object.defineProperty(this, "lock", {
      value: "false",
    });
  };
  this.unlockOrder = function () {
    Object.defineProperty(this, "lock", {
      value: "true",
    });
  };
  Object.defineProperty(this, "lock", {
    writable: this.lock,
  });
}

let user1 = new CreateОrder();
user1.addItem("Чай", 100);
user1.addItem("Кофе", 80);
user1.addItem("Питца", 200);
user1.getCheck();
