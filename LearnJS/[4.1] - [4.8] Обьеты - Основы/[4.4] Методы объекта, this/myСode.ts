interface BasePerson {
  name: string;
  patronymic: string;
  lastName: string;
  getFullName: () => string;
}

interface Student extends BasePerson {
  assignedCurator: () => string;
}

interface Curator extends BasePerson {
  yearsOfExperience: number;
  expertises: string[];
}

const dataMichael: Curator = {
  name: "Михаил",
  patronymic: "Петрович",
  lastName: "Шумин",

  getFullName(): string {
    return `${this.name} ${this.lastName} ${this.patronymic}`;
  },

  yearsOfExperience: 10,

  expertises: ["Vue", "JavaScript", "Typescript"],
};

const dataVladimir: Student = {
  name: "Владимир",
  patronymic: "Владимирович",
  lastName: "Лутин",

  getFullName(): string {
    return `${this.name} ${this.lastName} ${this.patronymic}`;
  },
  assignedCurator(): string {
    return dataMichael.getFullName.call(dataMichael);
  },
};

console.log(dataMichael.getFullName());
