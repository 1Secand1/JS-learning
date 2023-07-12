function toLocaleUpperCase(str) {
  if (!str) return undefined;

  const newStr = `${str[0].toLocaleUpperCase()}${str.slice(1)}`;
  return newStr;
}

console.log(toLocaleUpperCase("1пельмень"));

module.exports = toLocaleUpperCase;

