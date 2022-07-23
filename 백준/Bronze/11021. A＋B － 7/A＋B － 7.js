const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = '';
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  for (let i = 1; i <= input[0]; i++) {
    const A = Number(input[i].split(" ")[0]);
    const B = Number(input[i].split(" ")[1]);
    result += `Case #${i}: ${A+B}\n`
  }
  console.log(result)
  process.exit();
});