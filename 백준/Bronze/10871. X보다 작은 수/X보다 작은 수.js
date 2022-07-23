const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = "";
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const len = Number(input[0].split(" ")[0]);
  const max = Number(input[0].split(" ")[1]);
  const arr = input[1].split(" ");
  for (let i = 0; i < len; i++) {
    if (Number(arr[i]) < max) {
      result += arr[i] + " ";
    }
  }
  console.log(result);
  process.exit();
});
