let user1 = undefined;
console.log("undefined:", user1 ?? "аноним");

let user2 = null;
console.log("null:", user2 ?? "аноним");

let user3 = "";
console.log("Пустая строка:", user3 ?? "аноним");

let user4 = "0";
console.log("Строка 0:", user4 ?? "аноним");

// Применение: установка значения по умолчанию
