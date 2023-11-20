class MenuList {
  constructor() {
    this.list = new Map();
  }

  addItem(item, count) {
    if (typeof item !== "object") {
      throw new Error("item ожидался типом object");
    }

    if (!isFinite(count)) {
      throw new Error("Ожидалось числовое значение в поле количества товара.");
    }

    if (typeof count === "string") {
      count = Number(count);
    }

    let key = Object.keys(item)[0];
    let value;

    if (this.list.has(key)) {
      value = this.list.get(key);
      value = JSON.parse(value);

      value.count = value.count + count;
    } else {
      value = {
        unitPrice: Object.values(item)[0],
        count: count,
      };
    }

    value = JSON.stringify(value);
    this.list.set(key, value);
  }

  removeItem(item, count = 0) {
    const key = Object.keys(item)[0];
    let value = this.list.get(key);
    value = JSON.parse(value);

    const difference = value.count - count;

    if (difference < 0) {
      throw new Error("При вычислении значение получится отрицательным");
    }

    if (count === 0 || difference === 0) {
      this.list.delete(key);
      return;
    }

    value.count = value.count - count;

    value = JSON.stringify(value);
    this.list.set(key, value);
  }
  
  getCheck() {}
  lockOrder() {}
  unlockOrder() {}
}

let menuList = new MenuList();

menuList.addItem({ курица: 100 }, "5");
menuList.addItem({ курица: 100 }, "5");
menuList.removeItem({ курица: 100 }, 5);
