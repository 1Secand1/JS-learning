let user1 = undefined;
console.log("undefined:", user1 ?? "аноним");

let user2 = null;
console.log("null:", user2 ?? "аноним");

let user3 = "";
console.log("Пустая строка:", user3 ?? "аноним");

let user4 = "0";
console.log("Строка 0:", user4 ?? "аноним");

function validation(user) {
  return user ?? "Гость";
}

// function setPlacementCardinates(src, x = 0, y = 0) {} аналогичный способ

function setPlacementCardinates(src, x, y) {
    
  if (!src) {
    throw new Error("src undefined");
  }

  const img = new Image();

  img.onload = function () {
    ctx.drawImage(img, y ?? 0, x ?? 0);
  };

  console.log(x, y);
}

setPlacementCardinates();

// Применение: установка значения по умолчанию
