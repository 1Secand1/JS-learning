/*
  Какие значения выведет цикл for?  
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 4

console.log();

for (let i = 0; i < 5; ++i) {
  console.log(i);
}
// 4

// А что если вынисте увелечения i в цикл

for (let i = 0; i < 5; i) {
  i++;
  console.log(i);
}
// 5

console.log();

for (let i = 0; i < 5; i) {
  ++i;
  console.log(i);
}
// 5

//---------------------------------------

/*
 Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
*/

let number = 0;

do {
  number = prompt("В видите число");
} while (number > 100);

for (let index = 0; index < 1; index++) {
  number = prompt("В видите число");
  if (number > 100) index -= 1;
}
