let image = document.createElement("img");
image.src = "img.png";

image.addEventListener("load", function () {});
image.addEventListener("error", function () {
  console.log("image load error");
});

// выполните промисификацию загрузки картинок. Потестируйте полученный код.

function loadImage(path) {
  return new Promise((res, rej) => {
    let image = document.createElement("img");
    image.src = "img.png";

    image.addEventListener("load", function () {
      res(path);
    });
    image.addEventListener("error", function () {
      rej(new Error("image load error"));
    });
  });
}

loadImage(image.src)
  .then((image) => document.body.appendChild(image))
  .catch((eror) => console.log(eror));

//   Напишите код, который дождется окончания загрузки всех картинок, а затем добавит их в цикле в конец body.

let paths = ["img1.png", "img2.png", "img3.png"];

function loadImage(pathsArr) {
  let promiseArr = pathsArr.map((path) => {
    return new Promise((res, rej) => {
      let image = document.createElement("img");
      image.src = "img.png";

      image.addEventListener("load", function () {
        res(path);
      });
      image.addEventListener("error", function () {
        rej(new Error("image load error"));
      });
    });
  });

  return new Promise.all(promiseArr);
}

loadImage(paths)
  .then((image) => document.body.appendChild(image))
  .catch((eror) => console.log(eror));

// Дан следующий код,выполните его промисификацию.

window.addEventListener("DOMContentLoaded", function () {
  console.log("dom загружен");
});

function DOMContentLoadedPromisification() {
  return new Promise((res, rej) => {
    window.addEventListener("DOMContentLoaded", res);
  });
}

DOMContentLoadedPromisification().then(console.log("dom загружен"));
