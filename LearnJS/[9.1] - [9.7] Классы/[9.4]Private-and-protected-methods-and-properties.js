class User {
  #password;
  #name;
  constructor(name, password) {
    this.#password = password;
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
  changeName(newName, password) {
    if (password !== this.#password) return;

    this.#name = newName;
    return this.#name;
  }
}

let user = new User("Влад", 123);
console.log(user.getName());
// user.#name = 1;
user.changeName("Абоба", 123);
console.log(user.getName());
