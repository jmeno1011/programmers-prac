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
    const B = Number(input[1]);

    if (A > 0 && B > 0) {
      console.log(1);
    } else if (A < 0 && B > 0) {
      console.log(2);
    } else if (A < 0 && B < 0) {
      console.log(3);
    } else {
      console.log(4);
    }

    rl.close();
  }
});
