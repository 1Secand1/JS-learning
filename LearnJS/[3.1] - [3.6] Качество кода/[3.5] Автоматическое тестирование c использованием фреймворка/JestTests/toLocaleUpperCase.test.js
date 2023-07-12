const { describe } = require("node:test");
const toLocaleUpperCase = require("../task/script.js");

// test("Провописание слов с заглавной буквы", () => {
//   expect(toLocaleUpperCase("котики")).toBe("Котики");
// });

// test("Провописание слов с заглавной буквы(с намеренной ошибкой в тесте)", () => {
//   expect(toLocaleUpperCase("котики")).toBe("Котики!");
// });

describe("Провописание слов с заглавной буквы", () => {
  const testCase = [
    {
      inString: "js",
      expected: "Js",
    },
    {
      inString: "HTML",
      expected: "HTML",
    },
    {
      inString: "hi cat",
      expected: "Hi cat",
    },
    {
      inString: "1пельмень",
      expected: "1пельмень",
    },
  ];
  testCase.forEach((test) => {
    it(`Входящая строка: ${test.inString} ожидаю: ${test.expected}`, () => {
      const res = toLocaleUpperCase(test.inString);
      expect(res).toBe(test.expected);
    });
  });
});
