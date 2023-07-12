function toLocaleUpperCase(str) {
  const newStr = `${str[0].toLocaleUpperCase()}${str.slice(1)}`;

  return newStr;
}
