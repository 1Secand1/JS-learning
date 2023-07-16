/*
  Возможно ли создать функции A и B, чтобы new A() == new B()?


  function A() { ... }
  function B() { ... }

  let a = new A();
  let b = new B();

  alert( a == b ); // true

  Если да – приведите пример вашего кода. 
*/

// Ответ - нет нельзя
// правальный ответ - можно
if (0) {
  let a = new A();
  let b = new B();

  function A() {
    return Object;
  }
  function B() {
    return Object;
  }

  console.log(a == b);
}
//-----------------------------------------------------------

/*
  Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
  
  read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
  sum() возвращает сумму этих свойств.
  mul() возвращает произведение этих свойств.
*/

function Calculator(params) {
  let a;
  let b;
  this.read = function () {
    a = +prompt("В видите число a");
    b = +prompt("В видите число b");
  };
  this.sum = function () {
    return a + b;
  };
  this.mul = function () {
    return a * b;
  };
}
let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
