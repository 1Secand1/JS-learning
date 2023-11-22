class MenuList {
  constructor() {
    this.list = new Map();
    this._editable = true;
  }

  get canBeEdited() {
    return this._editable;
  }

  addItem(item, count) {
    if (!this._editable) {
      throw new Error("Изменение запрещено");
    }

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
      value.count = value.count + count;
    } else {
      value = {
        unitPrice: Object.values(item)[0],
        count: count,
      };
    }

    this.list.set(key, value);
  }

  removeItem(item, count = 0) {
    if (!this._editable) {
      throw new Error("Изменение запрещено");
    }
    if (typeof item !== "object") {
      throw new Error("item ожидался типом object");
    }

    const key = Object.keys(item)[0];
    let value = this.list.get(key);

    const difference = value.count - count;

    if (difference < 0) {
      throw new Error("При вычислении значение получится отрицательным");
    }

    if (count === 0 || difference === 0) {
      this.list.delete(key);
      return;
    }

    value.count = value.count - count;

    this.list.set(key, value);
  }

  getCheck() {
    let check = [];
    let totalСost = 0;

    this.list.forEach((e, key) => {
      let amount = e.count * e.unitPrice;
      check.push(`${key} ${e.count} шт - ${amount} рублей`);
      totalСost += amount;
    });

    check.push(`Итого - ${totalСost} рублей`);

    return check;
  }
  lockOrder() {
    this._editable = false;
  }
  unlockOrder() {
    this._editable = true;
  }
}

let menuList = new MenuList();

const nameItemInput = document.getElementById("nameItem");
const unitCostInput = document.getElementById("unitСost");
const quantityInput = document.getElementById("quantity");

function modifyMenuItem(
  idButton,
  inputName,
  inputUnitCost,
  inputQuantity,
  action
) {
  const button = document.getElementById(idButton);

  button.addEventListener("click", () => {
    const item = {};
    item[inputName.value] = inputUnitCost.value;

    if (action === "add") {
      menuList.addItem(item, inputQuantity.value);
    } else if (action === "remove") {
      menuList.removeItem(item, inputQuantity.value);
    }

    inputName.value = "";
    inputUnitCost.value = "";
    inputQuantity.value = "";
  });
}
function printList(idHtmlElement, idButton) {
  const button = document.getElementById(idButton);
  const htmlElement = document.getElementById(idHtmlElement);
  const textItemInList = menuList.getCheck();

  button.addEventListener("click", () => {
    let content = "";
    textItemInList.forEach((item) => {
      console.log(item);
      content += `
      <li>
        ${item}
      </li>
      `;
    });
    htmlElement.innerHTML = content;
  });
}
function editPermissionSwitch(idButtonLock, idButtonUnLock) {
  const buttonLock = document.getElementById(idButtonLock);
  const buttonUnLock = document.getElementById(idButtonUnLock);

  buttonLock.addEventListener("click", () => {
    menuList.lockOrder();
  });
  buttonUnLock.addEventListener("click", () => {
    menuList.unlockOrder();
  });
}

modifyMenuItem("add", nameItemInput, unitCostInput, quantityInput, "add");
modifyMenuItem("remove", nameItemInput, unitCostInput, quantityInput, "remove");
editPermissionSwitch("lockOrder", "unlockOrder");
printList("check", "summarize");
