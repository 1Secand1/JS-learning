class AccessRightsStructure {
  static accessLevel = 0;
  static rulList = {};

  #accessLevel = 0;
  #password = "superAdmin123";

  constructor(password) {
    this.#accessLevel = AccessRightsStructure.accessLevel;
    this.#password = password;

    AccessRightsStructure.accessLevel++;

    AccessRightsStructure.rulList[this.#accessLevel] = this.#password;
  }

  createARoleUser() {}

  createNewRole(pasword, paswordСreator) {
    if (this.#password !== paswordСreator) {
      return;
    }

    return new AccessRightsStructure(pasword);
  }
}

let superAdmin = new AccessRightsStructure("superAdmin123");
let admin = superAdmin.createNewRole("admin123", "superAdmin123");
let moderator = admin.createNewRole("moderator123", "admin12");

console.log(superAdmin);
console.log(admin);
console.log(moderator);
