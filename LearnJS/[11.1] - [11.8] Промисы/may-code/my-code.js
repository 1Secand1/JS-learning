let getUsers = new Promise((res) => {
  let getUsersInUrl = new Promise((res) => {
    res(fetch("https://jsonplaceholder.typicode.com/users"));
  });

  getUsersInUrl
    .then((response) => response.json())
    .then((userJson) => userJson.map((user) => user.name))
    .then((userNames) => res(userNames));
});

function printUserList(userNames) {
  let ul = document.createElement("ul");

  let userNamesList = userNames.map((user) => {
    let li = document.createElement("li");
    li.textContent = user;
    return li;
  });

  userNamesList.forEach((li) => {
    ul.appendChild(li);
  });

  document.querySelector("body").appendChild(ul);

  ul = null;
  userNamesList = null
}
getUsers.then((userNames) => printUserList(userNames));
