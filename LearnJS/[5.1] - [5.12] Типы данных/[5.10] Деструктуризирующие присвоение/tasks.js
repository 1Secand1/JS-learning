if (0) {
  /*
    Напишите деструктурирующее присваивание, которое:
    свойство name присвоит в переменную name.
    свойство years присвоит в переменную age.
    свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

  let user = {
    name: "John",
    years: 30,
  };

  let { name, age, isAdmin = false } = user;

  console.log(name);
  console.log(age);
  console.log(isAdmin);
}
// ********************************************

if (0) {
  /*
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
  */

  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  function topSalary(salaries) {
    let maxSum = 0;
    let maxName = undefined;

    for (const [name, sum] of Object.entries(salaries)) {
      if (maxSum <= sum) {
        maxSum = sum;
        maxName = name;
      }
    }

    return maxName;
  }
}