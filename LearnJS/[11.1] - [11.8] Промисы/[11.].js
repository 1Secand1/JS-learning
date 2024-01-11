const foo = new Promise((res, rej) => {
  let a = undefined;

  setTimeout(() => {
    let a = 1;
    rej("aboba");
    res(a);
  }, 1000);
});

foo
.catch((a) => console.log(a + 1))
.then((a) => console.log(a + 3))
