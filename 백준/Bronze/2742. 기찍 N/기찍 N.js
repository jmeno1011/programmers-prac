const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result = "";
rl.on("line", (input) => {
  for (let i = input; i >= 1; i--) {
    result += i + "\n";
  }
  console.log(result);
  rl.close();
});
