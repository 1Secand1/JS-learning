/*
   Здесь функция makeUser возвращает объект.
   
   Каким будет результат при обращении к свойству объекта ref? Почему?
   
   function makeUser() {
     return {
       name: "John",
       ref: this
     };
   }
   
   let user = makeUser();
   
   alert( user.ref.name ); // Каким будет результат?

*/

// ОТВЕТ: выведется John (не правильно)

// --------------------------------------------------------------------

/*
   создайте калькулятор
   Создайте объект calculator (калькулятор) с тремя методами:
   
   read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
   sum() (суммировать) возвращает сумму сохранённых значений.
   mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
if (0) {
  const calculator = {
    a: 0,
    b: 0,
    read() {
      this.a = +prompt("В видите число a");
      this.b = +prompt("В видите число b");
    },
    sum() {
      alert("a + b =", this.a + this.b);
    },
    mul() {
      alert("a * b = ", this.a * this.b);
    },
  };
}
//---------------------------------------------------------------------

/*
  У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
  
  let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };

  Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0

  Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

  ladder.up().up().down().showStep().down().showStep();  
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
