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

//______________________________________________________________________

class AccessLevelСonstructor {
  constructor(roleName, capabilities) {
    if (AccessLevelСonstructor.roleList) {
      AccessLevelСonstructor.accessLevel++;
    }

    AccessLevelСonstructor.roleList[roleName] = {
      accessLevel: AccessLevelСonstructor.accessLevel,
      methods: capabilities,
      assignRole: AccessLevelСonstructor.getRole,
    };
  }

  static accessLevel = 0;
  static roleList = {};

  static AccessLevelList = {};

  static getRole(roleName, password, providedPassword) {
    if (this !== AccessLevelСonstructor) {
      let roleAccessLevel =
        AccessLevelСonstructor.roleList[roleName].accessLevel;

      if (
        this.accessLevel > roleAccessLevel ||
        this.password !== providedPassword
      ) {
        throw new Error("Недостаточно прав доступа");
      }
    }

    return {
      password,
      ...AccessLevelСonstructor.roleList[roleName],
    };
  }
}

new AccessLevelСonstructor("admin", {
  createPost() {
    console.log("Пост создан");
  },
  deletePost() {
    console.log("Пост Удолён");
  },
});

new AccessLevelСonstructor("moder", {
  editPost() {
    console.log("Пост отредактирован");
  },
});

new AccessLevelСonstructor("user", {
  exist() {
    console.log("Существует...");
  },
});

const Vlad = AccessLevelСonstructor.getRole("admin", "admin123");

const Dima = Vlad.assignRole("moder", "Dima123", "admin123");
const aboba = Dima.assignRole("user", "aboba", "Dima123");
