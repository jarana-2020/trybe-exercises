function wordUpperCase(string) {
  return string.toUpperCase();
}

function firstCharacter(string) {
  return string.substr(0, 1);
}

function concatString(string1, string2) {
  return string1 + string2;
}

module.exports = {
  wordUpperCase,
  firstCharacter,
  concatString,
};