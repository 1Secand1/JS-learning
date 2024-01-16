if (0) {


  /**
    Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
   */

  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }

  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

  //-----------------------------------------------------------------

  async function loadJson(url) {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error(data.status);
    }

    let json = await response.json();
    return json;
  }

  loadJson('no-such-user.json')
    .catch(alert); // Error: 404 (4)
}

if (0) {

  /**
   Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
   В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
   */

  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

  async function loadJson(url) {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error(data.status);
    }

    let json = await response.json();
    return json;
  }


  async function demoGithubUser() {
    let user;

    while (true) {
      let name = prompt("Введите логин?", "iliakan");

      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }


    alert(`Полное имя: ${user.name}.`);
    return user;
  }

  demoGithubUser();
}


if (0) {
  /**
 Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
 P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.
 */

  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
  }

  function f() {
    wait().then(console.log);
  }
}
