let n = 5;
let symbol = '*';
let line = '';
let position = n;

for (let index = 1; index <= n; index += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < position) {
      line = line + ' ';
    } else {
      line = line + symbol;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};