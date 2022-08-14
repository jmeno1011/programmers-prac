const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const A = Number(value.split(" ")[0]);
  const B = Number(value.split(" ")[1]);
  const C = Number(value.split(" ")[2]);
  if (B >= C) {
    console.log(-1);
  } else {
    console.log(Math.floor(A / (C - B)) + 1);
  }
  rl.close();
});
