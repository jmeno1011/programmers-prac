const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (value) => {
  input.push(value);
  if (input.length === 2) {
    const A = Number(input[0]);
    const B = input[1];
    Array.from(B, Number)
      .reverse()
      .map((v) => console.log(A * v));
    console.log(A * Number(B));
    rl.close();
  }
});
