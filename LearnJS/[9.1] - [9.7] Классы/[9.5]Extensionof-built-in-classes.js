class customArray extends Array {
  constructor(...elements) {
    super();

    elements.forEach((e, i) => {
      this[i] = e;
    });
    this.length = elements.length;
  }

  customPush(...elements) {
    const newLengthArray = this.length + elements.length;

    for (let i = this.length, j = 0; i < newLengthArray; i++, j++) {
      this[i] = elements[j];
    }

    return newLengthArray;
  }

  customPop() {
    const removedElement = this[this.length - 1];

    this.length = this.length - 1;
    return removedElement;
  }

  customShift() {
    const removedElement = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;

    return removedElement;
  }

  customUnshift(...elements) {
    for (let i = 0; i < elements.length; i++) {
      for (let j = this.length; j >= 0; j--) {
        this[j] = this[j - 1];
        if (j == 0) {
          this[0] = elements[i];
        }
      }
    }

    return this.length;
  }
}

let array = new customArray(0, 1, 2);

console.log(array);

array.customShift();

// console.log(array);
