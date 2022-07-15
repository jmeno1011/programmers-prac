const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const score = Number(input);
  if ((score % 4 === 0 && score % 100 !== 0) || score % 400 === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
  rl.close();
});
