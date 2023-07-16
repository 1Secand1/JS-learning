/*
  Напишите код, который будет спрашивать логин с помощью prompt.
  
  Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
  
  Пароль проверять так:
  
  Если введён пароль «Я главный», то выводить «Здравствуйте!»,
  Иначе – «Неверный пароль»,
  При отмене – «Отменено».
*/

function validatino(refLogin, refPassword) {
  const login = prompt("Ти кто ?");

  if (login == null || login == "") {
    alert("Отмена!");
    return;
  }

  if (login != refLogin) {
    alert("Я вас не знаю");
    return;
  }

  const password = prompt("пароль ?");

  if (password === refPassword) {
    alert("Здравствуйте!");
    return;
  }

  if (password == null || password == "") {
    alert("Отмена!");
    return;
  }

  if (password != refPassword) {
    alert("Неверный пароль");
    return;
  }
}
validatino("Я", "0");
