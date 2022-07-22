const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const max = Number(input[0]);
  for (let i = 1; i <= max; i++) {
    const A = Number(input[i].split(" ")[0]);
    const B = Number(input[i].split(" ")[1]);
    console.log(A + B);
  }
  process.exit();
});
