// Вопрос - почему после catch всёравно выводится then

const foo = new Promise((res, rej) => {
  let a = undefined;

  setTimeout(() => {
    let a = 1;
    rej("aboba");
    res(a);
  }, 1000);
});

foo.catch((a) => console.log(a + 1)).then((a) => console.log(a + 3));

// then выполняется так как catch возвращает положительный результат а не ошибку
