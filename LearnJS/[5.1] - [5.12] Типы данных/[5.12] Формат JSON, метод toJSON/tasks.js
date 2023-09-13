if (0) {
  /*
  Преобразуйте объект в JSON, а затем обратно в обычный объект
  */

  let user = {
    name: "Василий Иванович",
    age: 35,
  };

  let userJSON = JSON.stringify(user);
  let userFromJson = JSON.parse(userJSON);
}

// ********************************************

if (1) {
  /*
  В простых случаях циклических ссылок мы можем исключить свойство, 
  из-за которого они возникают, из сериализации по его имени.

  Но иногда мы не можем использовать имя, так как могут быть и другие, 
  нужные, свойства с этим именем во вложенных объектах. 

  Поэтому можно проверять свойство по значению.

  Напишите функцию replacer для JSON-преобразования, 
  которая удалит свойства, ссылающиеся на meetup:
  */

  let room = {
    number: 23,
  };

  let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
  };

  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;

  console.log(
    JSON.stringify(meetup, function replacer(key, value) {
      return key !== "" && value === meetup ? undefined : value;
    })
  );
}

// ********************************************
