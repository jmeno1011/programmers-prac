const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = 0;
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  let kg = Number(input[0]);
  if (kg % 5 === 0) {
    result = kg / 5;
  } else {
    while (kg > 0) {
      kg -= 3;
      result += 1;
      if (kg % 5 === 0) {
        result += kg / 5;
        break;
      } else if (kg === 1 || kg === 2) {
        result = -1;
        break;
      } else if (kg === 0) {
        break;
      }
    }
  }

  console.log(result);

  process.exit();
});
