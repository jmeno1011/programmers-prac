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
  const T = input[0];
  const arr = input[1].split("");
  for (let i = 0; i < T; i++) {
    result += Number(arr[i]);
  }
  console.log(result);
  process.exit();
});
